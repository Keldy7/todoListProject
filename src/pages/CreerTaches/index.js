import React, { useState } from "react";
import { Text, ScrollView, View, SafeAreaView } from "react-native";
import Bouton from "../../components/bouton";
import ZoneDeSaisie from "../../components/input";
import STYLES from "../../styles";
import Calendrier from "../../components/calendrier";
import DatePicker from "react-native-datepicker";
import { COLORS, SIZES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ajouterTache } from "../../redux/taches";
import { nanoid } from "@reduxjs/toolkit";

//Formulaire de création de tâches
const CreerTaches = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [dateDebut, setDateDebut] = useState(new Date());
  const [dateFin, setDateFin] = useState(new Date());

  const liste = useSelector(state => state.taches.taches);

  const CreerTache = async () => {

    const nouvelleTache = {
      //Caractéristiques d'une nouvelle tâche
      id: nanoid(),
      titreTache: titre,
      descriptionTache: description,
      dateD: dateDebut,
      dateF: dateFin,
      //Pour une nouvelle tâche créée, le statut est non demarrée
      statut: "En cours",
    };

    //On tente d'enregistrer une tâche
    try {
      await AsyncStorage.setItem(
        "taches",
        JSON.stringify([...liste, nouvelleTache])
      );
      //Tâche enregistrée, on affiche la page de listing des tâches
      dispatch(ajouterTache(nouvelleTache));
      navigation.navigate("ListeTâches");

    } catch (erreur) {
      console.log(erreur);
    }
  };

  return (
    <SafeAreaView style={[STYLES._container, { paddingTop: 25 }]}>
      <ScrollView 
        style={{ padding: SIZES.padding }}
      >
        <ZoneDeSaisie
          label={"Nom de la tâche"}
          placeholder={"Ex: Course à Bon Prix"}
          autoCapitalize
          onChangeText={(titreTache) => {setTitre(titreTache)}}
        />
        <View style={{ margin: "3%" }}>
          {/* <Calendrier />
           */}
          <View style={STYLES._row}>
            <View>
              <Text style={[STYLES._titre, { fontSize: SIZES.h2 }]}>
                {"Date début"}
              </Text>
              <DatePicker
                date={dateDebut}
                onDateChange={setDateDebut}
                mode="date"
                placeholder="Ex: 19/01/2023"
                format="DD/MM/YYYY"
                minDate="01/01/2022"
                maxDate="01/01/2122"
                confirmBtnText="Valider"
                cancelBtnText="Annuler"
                customStyles={{
                  dateIcon: {
                    rigth: -5,
                    top: 2,
                  },
                  dateInput: {
                    borderColor: COLORS.jauneOr,
                    alignItems: "center",
                    borderWidth: 1.5,
                    borderRadius: SIZES.radius,
                  },
                  placeholderText: {
                    color: COLORS.grisLeger,
                    fontSize: 15,
                  },
                  dateText: {
                    fontSize: 15,
                  },
                }}
              />
            </View>
            <View>
              <Text style={[STYLES._titre, { fontSize: SIZES.h2 }]}>
                {"Date fin"}
              </Text>
              <DatePicker
                mode="date"
                placeholder="Ex: 19/01/2023"
                format="DD/MM/YYYY"
                minDate="01/01/2022"
                maxDate="01/01/2122"
                confirmBtnText="Valider"
                cancelBtnText="Annuler"
                customStyles={{
                  dateIcon: {
                    rigth: -5,
                    top: 2,
                  },
                  dateInput: {
                    borderColor: COLORS.jauneOr,
                    alignItems: "center",
                    borderWidth: 1.5,
                    borderRadius: SIZES.radius,
                  },
                  placeholderText: {
                    color: COLORS.grisLeger,
                    fontSize: 15,
                  },
                  dateText: {
                    fontSize: 15,
                  },
                }}
                date={dateFin}
                onDateChange={setDateFin}
              />
            </View>
          </View>
        </View>
        <ZoneDeSaisie
          style={[STYLES._formInputTexte, { height: 150 }]}
          label={"Description"}
          placeholder={"Ex: Courses à Bon Prix"}
          autoCapitalize
          multiline={true}
          numberOfLines={4}
          onChangeText={(descriptionTache) => {setDescription(descriptionTache)}}
        />
        <Bouton btn_texte={"Créer"} btn_press={CreerTache} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreerTaches;
