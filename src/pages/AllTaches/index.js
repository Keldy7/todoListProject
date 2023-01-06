import React from "react";
import { FlatList, View, Text, SafeAreaView, ScrollView } from "react-native";
import Grille from "../../components/grid";
import STYLES from "../../styles";
import { COLORS, SIZES, DONNEES } from "../../constants";

//Afficher la liste de toutes les tâches
const Taches = () => {
  const listVide = []
  return (
    <SafeAreaView style = {[STYLES._container, { paddingTop: 25}]}>
      <View style = {{ padding: SIZES.padding }}>
        <FlatList
          data = {DONNEES}
          keyExtractor = {item => item.id}
          renderItem = {({ item }) => {
            return (
              <View style = {STYLES._dispoWrap}>
                <Grille
                  bgColor = {COLORS.rouge}
                  nomIcone = "note-remove-outline"
                  label = {item.titre}
                  width = "100%"
                />
              </View>
            )
          }}

          //Message lorsqu'aucune tâche a été enregistré
          ListEmptyComponent = {
            <View 
              style = {[
                {flex: 1, marginTop: '100%', marginBottom: '100%'},
                STYLES._centrerAligner
              ]}
            >
              <Text style = {STYLES._titre}>Aucune tâche enregistrée</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Taches