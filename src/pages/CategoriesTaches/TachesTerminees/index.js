import React from "react";
import { FlatList, View, Text, SafeAreaView, ScrollView } from "react-native";
import Grille from "../../../components/grid";
import STYLES from "../../../styles";
import { COLORS, SIZES } from "../../../constants";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//Afficher la liste de toutes les tâches enregistrées
const TerminerTaches = () => {
  const navigation = useNavigation()

  //On récupère les taches à partir de leur statut
  const taches = useSelector(state => state.taches.taches)
  const lesTaches = taches.filter(tache => tache.statut)

  //Si aucune tâche n'est enregistrée
  const AucuneTache = () =>(
    <View 
      style = {[
        {flex: 1, marginTop: '100%', marginBottom: '100%'},
        STYLES._centrerAligner
      ]}
    >
      <Text style = {[STYLES._titre, { fontSize: 20 }]}>Aucune tâche terminée</Text>
    </View>

  )
  
  return (
    <SafeAreaView style = {[STYLES._container, { paddingTop: 25}]}>
      <View style = {{ padding: SIZES.padding }}>
        <FlatList
          data = {lesTaches}
          keyExtractor = {item => item.id.toString()}
          renderItem = {({ item }) => {
            if(item.statut == "Terminée") {
              return (
                <View style = {STYLES._dispoWrap}>
                  <Grille
                    bgColor = {COLORS.succes}
                    nomIcone = "note-check-outline"
                    label = {item.titreTache}
                    btnPress = {() => navigation.navigate("Détails")}
                    width = "100%"
                  />
                </View>
              )
            } else {
              return <AucuneTache />
            }
          }}
          //Message lorsqu'aucune tâche a été enregistré
          ListEmptyComponent = { AucuneTache }
        />
      </View>
    </SafeAreaView>
  )
}

export default TerminerTaches