import React, { useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import Ionicon from "@expo/vector-icons/Ionicons";
import Icone from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector } from "react-redux";
import { COULEURS, SIZES } from "../../constants";
import Bouton from "../../components/bouton";
import { IconRetour } from "../../components/icone";
import ZoneDeSaisie from "../../components/input";
import STYLES from "../../styles";
import moment from 'moment';




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

    //Les setters
    const [edit, setEdit] = useState(false);
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [statut, setStatut] = useState("");
  
    const tacheModifier = {
        titreTache: titre,
        descriptionTache: description,
        dateD: dateDebut,
        dateF: dateFin,
        statut: statut,
    };
    // On recupère tacheCourante depuis notre state pour l'afficher
    const tacheCourante = useSelector(
        (state) => state.tacheCourante.tacheCourante
    );
    console.log(tacheCourante);

    // Gestion du statut à travers une liste déroulante
    const LisT = ()=> {
        //Le statut selectionné
        const [selected, setSelected] = useState(tacheCourante.statut);
    
        //Les données à afficher dans la liste déroulante
        const data = [
            {key:'1', value:'Non demarrée'},
            {key:'2', value:'En cours'},
            {key:'3', value:'Terminée'},
        ]
  
        return(
            <SelectList 
                setSelected = {(val) => setSelected(val)} 
                data = {data} 
                save = {selected}
                search = {false}
                boxStyles = {{ borderWidth: 1.5, borderColor: COULEURS.jauneOr, marginLeft: SIZES.base }}
                dropdownStyles = {{ marginLeft: SIZES.base  }}
                arrowicon = {<Icon name = "chevron-down" size={20} color = {COULEURS.jauneOr} />} 
                defaultOption = {{ key:'1', value:tacheCourante.statut, disabled:true }}
            />
        )
    };

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

    const Affich = async() =>{
        try {
            console.log("Formatter: ",moment(selectedDateFin).format("DD/MM/YYYY"))

        }catch (e) {
            console.log("Erreur ",e);
        }
    }

    return (
        <SafeAreaView style = {[STYLES._container, { paddingTop: 10 }]}>
            <ScrollView style = {{ padding: SIZES.padding }}>
            { edit ? (
                <ZoneDeSaisie
                label = {"Titre de la tâche à modifier"}
                value = {tacheCourante.titreTache}
                onChangeText = {(titreTache) => {setTitre(tacheCourante.titreTache)}}
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
                    <LisT/>
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
                    // placeholder = {tacheCourante.descriptionTache}
                    multiline = {true}
                    numberOfLines = {3}
                    value = {tacheCourante.descriptionTache}
                    onChangeText = {(descriptionTache) => {setDescription(tacheCourante.descriptionTache)}}
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
                    <Bouton btn_texte = {"Modifier"} btn_press = {Affich} />
                ) 
            }
    
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsTaches;
