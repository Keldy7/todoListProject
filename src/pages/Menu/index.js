import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants";
import STYLES from "../../styles";
import Listing from "../../components/listaches";
import Grille from "../../components/grid";

const Menu = () => {
  return (
    <SafeAreaView style={STYLES._container}>
      <View style={{ padding: SIZES.padding }}>
        <View style={[STYLES._row, { alignItems: "center", marginBottom: 10 }]}>
          <Grille
            bgColor={COLORS.rouge}
            nomIcone="note-remove-outline"
            label="Non demarré"
          />
          <Grille
            bgColor={COLORS.warning}
            nomIcone="note-alert-outline"
            label="En cours"
          />
          <Grille
            bgColor={COLORS.succes}
            nomIcone="note-check-outline"
            label="Terminé"
          />
        </View>
        <View style={{ backgroundColor: "#FFF", borderRadius: 15, padding: 8 }}>
          <View style={[STYLES._row, { alignItems: "center", paddingTop: 15 }]}>
            <Text style={[STYLES._formInputTitre, { fontSize: 20 }]}>
              {"Tâches d'aujourd'hui"}
            </Text>
            <TouchableOpacity onPress={() => alert("Afficher Voir plus")}>
              <Text style={{ color: COLORS.gris }}> Tout Voir</Text>
            </TouchableOpacity>
          </View>
          <Listing />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
