import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { COULEURS, SIZES } from "../../constants";
import STYLES from "../../styles";
import Listing from "../../components/listaches";
import Grille from "../../components/grid";


//Menu principal de TimeToDo
const Menu = ({navigation}) => {
  return (
    <SafeAreaView style={STYLES._container}>
      <View style={{ padding: SIZES.padding }}>

        {/* Blocs de tâches catégorisées (non demarré, en cours, terminé) */}
        <View style={[STYLES._row, { alignItems: "center", marginBottom: 10 }]}>
          {/* Bloc de tâches non demarrées */}
          <Grille
            bgColor={COULEURS.rouge}
            nomIcone="note-remove-outline"
            label="Non demarrée"
            btnPress = {() => navigation.navigate("ListeTâchesNonDemarrees")}
          />
          {/* Bloc de tâches en cours */}
          <Grille
            bgColor={COULEURS.warning}
            nomIcone="note-alert-outline"
            btnPress = {() => navigation.navigate("ListeTâchesEncours")}
            label="En cours"
          />
          {/* Bloc de tâches terminées */}
          <Grille
            bgColor={COULEURS.succes}
            nomIcone="note-check-outline"
            btnPress = {() => navigation.navigate("ListeTâchesTerminees")}
            label="Terminée"
          />
        </View>

        {/* Liste de tâches du jour */}
        <View style={{ backgroundColor: COULEURS.blanc, borderRadius: 15, padding: 8 }}>
          <View style={[STYLES._row, { alignItems: "center", paddingTop: 15 }]}>
            <Text style={[STYLES._formInputTitre, { fontSize: 20 }]}>
              {"Tâches d'aujourd'hui"}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ListeTâches')}>
              <Text style={{ color: COULEURS.gris }}> Tout Voir</Text>
            </TouchableOpacity>
          </View>
          <Listing />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
