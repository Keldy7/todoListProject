import React, { useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import Ionicon from "@expo/vector-icons/Ionicons";
import Icone from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { COULEURS, SIZES } from "../../constants";
import Bouton from "../../components/bouton";
import { IconRetour } from "../../components/icone";
import ZoneDeSaisie from "../../components/input";
import STYLES from "../../styles";
import moment from 'moment';
import { modifierTache } from "../../redux/tachesReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";



const DetailsTaches = () => {
    const navigation = useNavigation();

    //Style de l'header
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Détails de la tâche",
            headerTitleStyle: {
            color: COULEURS.jauneOr,
            fontSize: SIZES.h2,
            fontWeight: "bold",
        },
        headerLeft: () => <IconRetour />,
        headerRight: () => (
            <TouchableOpacity
                onPress = {() => {
                    setEdit(true);
                }}
            >
                <Icon
                    name = "edit"
                    size = {33}
                    color = {COULEURS.noirFonce}
                    style = {{ width: 45 }}
                />
            </TouchableOpacity>
        )
        })
    });

    //Les données à afficher dans la liste déroulante
    const data = [
        {id:'1', value:'Non demarrée'},
        {id:'2', value:'En cours'},
        {id:'3', value:'Terminée'},
    ]

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
    
     // On recupère tacheCourante depuis notre state pour l'afficher
     const tacheCourante = useSelector(
        (state) => state.tacheCourante.tacheCourante
    );

    //Les setters
    const [edit, setEdit] = useState(false);
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [statut, setStatut] = useState(tacheCourante.statut);
   
    const ModifierTache = async() =>{
        const tacheModifier = {
            id: tacheCourante.id,
            titreTache: titre,
            descriptionTache: description,
            dateD: moment(selectedDateDebut).format("DD/MM/YYYY"),
            dateF: moment(selectedDateFin).format("DD/MM/YYYY"),
            statut: statut,
        };
        try {

            await AsyncStorage.setItem(
                'MODIFIER_TACHE',
                JSON.stringify([...liste, tacheModifier])
            );
        
            //Tâche enregistrée, on affiche la page de listing des tâches
            dispatch(modifierTache(tacheModifier));
            navigation.navigate("ListeTâches");
            console.log("Liste complète des tâches: ",liste)

            //Dispatch a reducer of update task

        }catch (e) {
            console.log("Erreur de modification: ",e);
        }
    }

    return (
        <SafeAreaView style = {[STYLES._container, { paddingTop: 10 }]}>
            <ScrollView style = {{ padding: SIZES.padding }}>
            { edit ? (
                <ZoneDeSaisie
                label = {"Titre de la tâche à modifier"}
                placeholder = {tacheCourante.titreTache}
                onChangeText = {(titreTache) => {setTitre(titreTache)}}
                />
            ) : (
                <Text style = {[STYLES._titre]}>{tacheCourante.titreTache}</Text>
            )}
        <View style = {STYLES._sectionDetailTache}>
            <View style = {STYLES._demiSectionDetailTache}>
                <View
                    style = {[
                            STYLES._bgIcon,
                            STYLES._centrerAligner,
                            {
                            backgroundColor: COULEURS.jauneOr,
                            },
                        ]}
                        >
                    <Ionicon name = "calendar" size = {30} color = {COULEURS.jauneClair} />
                </View>
            {
            edit ? (
                <View style = {[STYLES._row, { alignItems: "center", margin: "2%"}]}>
                    <TextInput
                        style = {[STYLES._formInputTexte, { flex: 0}]}
                        placeholderTextColor = {COULEURS.noirGris}
                        onChangeText = {(dateDebut) => setDateDebut(dateDebut)}
                        value = {`${selectedDateDebut ? moment(selectedDateDebut).format("DD/MM/YYYY") : (tacheCourante.dateD)}`}
                    />
                    <TouchableOpacity style = {[STYLES._formInput]} onPress={showDatePickerDebut}>
                        <Icone 
                        name = "calendar-edit" 
                        size = {33}
                        color = {COULEURS.noir}
                        style = {{ width: 45, top: -4 }}/>
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
                        negativeButton={{label: 'Annuler', textColor: 'red'}}
                        positiveButton = {{label: 'Valider', textColor: 'green'}}
                    />
                    
                    <TextInput
                        style = {[STYLES._formInputTexte, { flex: 0}]}
                        placeholderTextColor = {COULEURS.noirGris}
                        onChangeText={(dateFin) => setDateFin(dateFin)}
                        value=
                        {`${selectedDateFin ? moment(selectedDateFin).format("DD/MM/YYYY") : (tacheCourante.dateF)}`}
                    />
                    <TouchableOpacity style = {[STYLES._formInput]} onPress={showDatePickerFin}>
                        <Icone 
                            name = "calendar-edit" 
                            size = {33}
                            color = {COULEURS.noir}
                            style = {{ width: 45, top: -4  }}/>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        confirmTextIOS = "Valider"
                        cancelTextIOS = "Annuler"
                        isVisible={calendrierFinVisible}
                        mode="date"
                        onConfirm={confirmDateFin}
                        onCancel={hideDatePickerFin}
                        onChange = {setDateDebut}
                        minimumDate={new Date()}
                        format = "DD/MM/YYYY"
                        negativeButton={{label: 'Annuler', textColor: 'red'}}
                        positiveButton={{label: 'Valider', textColor: 'green'}}
                    />
                </View>
            
                ) : (
                    <Text style = {STYLES._labelDetailTache}>
                    Du {tacheCourante.dateD} au {tacheCourante.dateF}
                    </Text>
                )
            }
            </View>
       
            <View style = {STYLES._demiSectionDetailTache}>
                <View
                    style={[
                        STYLES._bgIcon,
                        STYLES._centrerAligner,
                        {
                        backgroundColor: COULEURS.bluePale,
                        },
                    ]}
                >
                    <Icone name = "list-status" size = {30} color = {COULEURS.bleuClair} />
                </View>
            {
                edit ? (
                    <View>
                        <SelectList 
                            setSelected = {(val) => setStatut(val)} 
                            data = {data}
                            //save = {(val) => setSelected(val)}
                            search = {false}
                            boxStyles = {{ borderWidth: 1.5, borderColor: COULEURS.jauneOr, marginLeft: SIZES.base }}
                            dropdownStyles = {{ marginLeft: SIZES.base  }}
                            arrowicon = {<Icon name = "chevron-down" size={20} color = {COULEURS.jauneOr} />} 
                            defaultOption = {{ id: tacheCourante.statut, value:tacheCourante.statut}}
                        />
                        
                    </View>
                ) : (
                    <Text style = {STYLES._labelDetailTache}>Statut: {" "}
                    {tacheCourante.statut}
                    </Text>
                )
            }
            </View>
        </View>
        
        <View style = {STYLES._sectionDetailTache}>
            {
                edit ? (
                <ZoneDeSaisie
                    style = {[STYLES._formInputTexte, { height: 150 }]}
                    label = {"Description de la tâche à modifier"}
                    placeholder = {tacheCourante.descriptionTache}
                    multiline = {true}
                    numberOfLines = {3}
                    onChangeText = {(descriptionTache) => {setDescription(descriptionTache)}}
                />
                ) : (
                <View>
                    <Text style = {[STYLES._titre, {paddingBottom: SIZES.base}]}>
                        Description
                    </Text>
                    <Text style = {{ paddingBottom: SIZES.spacing }}>
                    {tacheCourante.descriptionTache}
                    </Text>
                </View>
                )
            }
        </View>
            {
                edit && (
                    <Bouton btn_texte = {"Modifier"} btn_press = {ModifierTache} />
                ) 
            }
    
            </ScrollView>
        </SafeAreaView>
  );
}

export default DetailsTaches;
