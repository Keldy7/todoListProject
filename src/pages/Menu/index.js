import React from "react"
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"
import CreerTaches from "../CreerTaches"
import { COLORS, SIZES } from "../../constants"
import STYLES from "../../styles"
import Listing from "../../components/listaches"

const Menu = () => {
  return (
    <SafeAreaView style={STYLES._container}>
      <View style={{ padding: SIZES.padding }}>
        <View style={[STYLES._row, { alignItems: "center" }]}>
          <Text style={[STYLES._formInputTitre, { fontSize: 20 }]}>
            {"Tâches d'aujourd'hui"}
          </Text>
          <TouchableOpacity onPress={() => alert('Afficher Voir plus')}>
            <Text style={{ color: COLORS.gris }}> Tout Voir</Text>
          </TouchableOpacity>
        </View>
        <Listing /> 
        <Text>Menu</Text>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
