import React from "react";
import { FlatList, View, Text, SafeAreaView, ScrollView } from "react-native";
import Grille from "../../../components/grid";
import STYLES from "../../../styles";
import { COULEURS, SIZES } from "../../../constants";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AucuneTache } from "../../AllTaches";

//Afficher la liste de toutes les tâches enregistrées
const NonDemarrerTaches = () => {
  const navigation = useNavigation()

  //On récupère les taches à partir de leur statut
  const taches = useSelector(state => state.taches.taches)
  const lesTaches = taches.filter(tache => tache.statut)
  
  return (
    <SafeAreaView style = {[STYLES._container, { paddingTop: 25}]}>
      <View style = {{ padding: SIZES.padding }}>
        <FlatList
          data = {lesTaches}
          keyExtractor = {item => item.id.toString()}
          renderItem = {({ item }) => {
            //Si la tache n'est pas encore demarrée le bg est rouge
            if(item.statut === "Non demarrée") {
              return (
                <View style = {STYLES._dispoWrap}>
                  <Grille
                    bgColor = {COULEURS.rouge}
                    nomIcone = "note-remove-outline"
                    label = {item.titreTache}
                    btnPress = {() => navigation.navigate("Détails")}
                    affichPoubelle
                    {...item}
                    width = "100%"
                  />
                </View>
              )
            }
          }}
          //Message lorsqu'aucune tâche a été enregistrée
          ListEmptyComponent = { <AucuneTache phrase = {"Aucune tâche non démarrée"} /> }
        />
      </View>
    </SafeAreaView>
  )
}

export default NonDemarrerTaches