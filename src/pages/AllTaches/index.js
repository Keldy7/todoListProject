import React from "react";
import { FlatList, View, Text, SafeAreaView, ScrollView } from "react-native";
import Grille from "../../components/grid";
import STYLES from "../../styles";
import { COLORS, SIZES, DONNEES } from "../../constants";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

//Afficher la liste de toutes les tâches enregistrées
const Taches = () => {
  const navigation = useNavigation()

  //On récupère les taches à partir de leur statut
  const taches = useSelector(state => state.taches.taches)
  const lesTaches = taches.filter(tache => tache.statut)

  //Si aucune tâche n'est enregistrée
  const aucuneTache = () =>(
    <View 
      style = {[
        {flex: 1, marginTop: '100%', marginBottom: '100%'},
        STYLES._centrerAligner
      ]}
    >
      <Text style = {STYLES._titre}>Aucune tâche enregistrée</Text>
    </View>

  )
  
  return (
    <SafeAreaView style = {[STYLES._container, { paddingTop: 25}]}>
      <View style = {{ padding: SIZES.padding }}>
        <FlatList
          data = {lesTaches}
          keyExtractor = {item => item.id.toString()}
          renderItem = {({ item }) => {
            //Si la tache n'est pas encore demarrée le bg est rouge
            if(item.statut == "Non demarrée") {
              return (
                <View style = {STYLES._dispoWrap}>
                  <Grille
                    bgColor = {COLORS.rouge}
                    nomIcone = "note-remove-outline"
                    label = {item.titreTache}
                    btnPress = {() => navigation.navigate("Détails")}
                    width = "100%"
                  />
                </View>
              )
            } else if (item.statut == "En cours"){
            //Si la tache est en cours le bg est orangé
              return (
                <View style = {STYLES._dispoWrap}>
                  <Grille
                    bgColor = {COLORS.warning}
                    nomIcone = "note-alert-outline"
                    label = {item.titreTache}
                    btnPress = {navigation.navigate("Détails")}
                    width = "100%"
                  />
                </View>
              )
            } else {
            //Si la tache est terminée le bg est vert
              return (
                <View style = {STYLES._dispoWrap}>
                  <Grille
                    bgColor = {COLORS.succes}
                    nomIcone = "note-check-outline"
                    label = {item.titreTache}
                    width = "100%"
                  />
                </View>
              ) 
            }
            
          }}
          //Message lorsqu'aucune tâche a été enregistré
          ListEmptyComponent = { aucuneTache }
        />
   
      </View>
    </SafeAreaView>
  )
}

export default Taches