import React, { useLayoutEffect, useState } from "react";
import { Text, ScrollView, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icone from "@expo/vector-icons/MaterialCommunityIcons";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Bouton from "../../components/bouton";
import ZoneDeSaisie from "../../components/input";
import STYLES from "../../styles";
import { COULEURS, SIZES } from "../../constants";
import { ajouterTache } from "../../redux/tachesReducer";
import { IconDroit, IconRetour } from "../../components/icone"
import moment from 'moment';



//Formulaire de création de tâches
const CreerTaches = () => {
  const navigation = useNavigation();

  //Styliser l'entête de la page
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: { backgroundColor: COULEURS.bluePale},
      headerTitle: "Créer une tâche",
      headerTitleStyle: { color: COULEURS.jauneOr, fontSize: SIZES.h2, fontWeight: "bold" },
      headerLeft: () => (
        <IconRetour />
      ),
      headerRight: () => (
        <IconDroit nomIcone = "close" navig = "Valider" />
      )
    });
  })

  const [erreur, setErreur] = useState(false);

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");

  // Gestion de la date de debut
  const [calendrierDebutVisible, setCalendrierDebutVisible] = useState(false);
  const [selectedDateDebut, setSelectedDateDebut] = useState();
  
  // Afficher le calendrier
  const showDatePickerDebut = () => {
    setCalendrierDebutVisible(true);
  };

  // Fermer le calendrier
  const hideDatePickerDebut = () => {
    setCalendrierDebutVisible(false);
  };

  // Confirmer la date de début selectionnée
  const confirmDateDebut = (date2Deb) => {
    console.log(date2Deb);
    setSelectedDateDebut(date2Deb);
    hideDatePickerDebut();
  };

  // Gestion de la date de fin
  const [calendrierFinVisible, setCalendrierFinVisible] = useState(false);
  const [selectedDateFin, setSelectedDateFin] = useState();

  const showDatePickerFin = () => {
    setCalendrierFinVisible(true);
  };

  const hideDatePickerFin = () => {
    setCalendrierFinVisible(false);
  };

  // Confirmer la date de fin selectionnée
  const confirmDateFin = (date2Fin) => {
    setSelectedDateFin(date2Fin);
    hideDatePickerFin();
  };


  const dispatch = useDispatch();
  const liste = useSelector(state => state.taches.taches);
  
  
  const CreerNewTache = async () => {

    //Caractéristiques d'une nouvelle tâche
    const nouvelleTache = {
      id: nanoid(), //L'id est généré automatiquement
      titreTache: titre,
      descriptionTache: description,
      dateD: moment(selectedDateDebut).format("DD/MM/YYYY"),
      dateF: moment(selectedDateFin).format("DD/MM/YYYY"),
      //Pour une nouvelle tâche créée, le statut est non demarrée
      statut: "Non demarrée"
    };

    // if ((dateDebut > dateFin) || (titre === "") || (dateDebut === "" || dateFin === "")) { 
    //   //setErreur(true);
    //   // <Text style = {STYLES._msgErreur}>  Les valeurs des champs doivent être correctement saisies </Text>
    //   console.log("Les valeurs des champs doivent être correctement saisies")
    // } else {
    //On tente d'enregistrer une tâche
    try {
      await AsyncStorage.setItem(
        'AJOUTER_TACHE',
        JSON.stringify([...liste, nouvelleTache])
      );

      //Tâche enregistrée, on affiche la page de listing des tâches
      dispatch(ajouterTache(nouvelleTache));
      navigation.navigate("ListeTâches");

    } catch (e) {
      console.log("Erreur d'ajout de tâches: ",e);
    }

  };

  return (
    <SafeAreaView style={[STYLES._container]}>
      <ScrollView style={{ padding: SIZES.padding - 7 }}>
        <ZoneDeSaisie
          label={"Nom de la tâche"}
          placeholder={"Ex: Courses à Bon Prix"}
          onChangeText={(titreTache) => {setTitre(titreTache)}}
        />
        <View style={{ margin: "3%" }}>
          <View style={STYLES._row}>

            <View>
              {/* Entête 2 */}
              <Text style={[STYLES._titre, { fontSize: SIZES.h2 }]}>
                {"Date de début"}
              </Text>

              <View style={STYLES._row}>
                <TextInput
                  editable = {false}
                  style = {[STYLES._formInputTexte, { flex: 0, width: 106}]}
                  placeholderTextColor = {COULEURS.noirGris}
                  placeholder = "14/01/2023"
                  onChangeText = {(dateDebut) => setDateDebut(dateDebut)}
                  value = {`${selectedDateDebut ? moment(selectedDateDebut).format("DD/MM/YYYY") : ""}`}
                />
                <TouchableOpacity style = {[STYLES._formInput]} onPress={showDatePickerDebut}>
                  <Icone 
                    name = "calendar-edit" 
                    size = {33}
                    color = {COULEURS.noir}
                    style = {{ width: 45, top: -4 }}
                  />
                </TouchableOpacity>
                <DateTimePickerModal
                  confirmTextIOS = "Valider"
                  cancelTextIOS = "Annuler"
                  isVisible={calendrierDebutVisible}
                  mode="date"
                  onConfirm={confirmDateDebut}
                  onCancel={hideDatePickerDebut}
                  onChange = {setDateDebut}
                  minimumDate={new Date()}
                  format = "DD/MM/YYYY"
                  negativeButton={{label: "Annuler"}}
                  positiveButton = {{label: 'Valider'}}
                />
              </View>
            </View>

            <View>
              {/* Entête 2 */}
              <Text style={[STYLES._titre, { fontSize: SIZES.h2 }]}>
                {"Date de fin"}
              </Text>

              <View style={STYLES._row}>
                <TextInput
                  style = {[STYLES._formInputTexte, { flex: 0, width: 106}]}
                  placeholderTextColor = {COULEURS.noirGris}
                  placeholder = "15/01/2023"
                  onChangeText={(dateFin) => setDateFin(dateFin)}
                  value = {`${selectedDateFin ? moment(selectedDateFin).format("DD/MM/YYYY") : ""}`}
                  editable={false}                    
                />
                <TouchableOpacity style = {[STYLES._formInput]} onPress={showDatePickerFin}>
                  <Icone 
                    name="calendar-edit" 
                    size = {33}
                    color = {COULEURS.noir}
                    style = {{ width: 45, top: -4 }}
                  />
                </TouchableOpacity>
                <DateTimePickerModal
                  confirmTextIOS = "Valider"
                  cancelTextIOS = "Annuler"
                  isVisible={calendrierFinVisible}
                  mode="date"
                  onConfirm={confirmDateFin}
                  onCancel={hideDatePickerFin}
                  onChange = {setDateFin}
                  minimumDate={new Date()}
                  format = "DD/MM/YYYY"
                  negativeButton={{label: 'Annuler', textColor: 'red'}}
                  positiveButton={{label: 'Valider', textColor: 'green'}}
                />
              </View>
            </View>
          </View>
        </View>
        {/* <Bouton  btn_texte = {"Créer"} btn_press = {CreerNewTache} disabled = {true} activeOpacity={0.1} /> */}
            {/* <Bouton btn_texte = {"Créer"} btn_press = {CreerNewTache} /> */}

        <ZoneDeSaisie
          style={[STYLES._formInputTexte, { height: 140 }]}
          label={"Description"}
          placeholder={"Ex: Courses à Bon Prix"}
          multiline={true}
          numberOfLines={3}
          onChangeText={(descriptionTache) => {setDescription(descriptionTache)}}
        />

        {/* Afficher le bouton de création lorsque les zones de saisies sont correctes */}
        {
          // ((dateDebut > dateFin) || (titre === "") || (dateDebut === "" || dateFin === "")) ? (
          //   <Text style = {STYLES._msgErreur}>  Les valeurs des champs doivent être correctement saisies </Text>
          // ) : (
          //   <Bouton btn_texte = {"Créer"} btn_press = {CreerNewTache} />
          // )
        }
        {/* { erreur && 
        <Text style = {STYLES._msgErreur}>Les valeurs des champs doivent être correctement saisies </Text>
        } */}
        <Bouton btn_texte = {"Créer"} btn_press = {CreerNewTache} />


      </ScrollView>
    </SafeAreaView>
  );
};

export default CreerTaches;
