import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants";
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
            bgColor={COLORS.rouge}
            nomIcone="note-remove-outline"
            label="Non demarré"
          />
          {/* Bloc de tâches en cours */}
          <Grille
            bgColor={COLORS.warning}
            nomIcone="note-alert-outline"
            label="En cours"
          />
          {/* Bloc de tâches terminées */}
          <Grille
            bgColor={COLORS.succes}
            nomIcone="note-check-outline"
            label="Terminé"
          />
        </View>

        {/* Liste de tâches du jour */}
        <View style={{ backgroundColor: "#FFF", borderRadius: 15, padding: 8 }}>
          <View style={[STYLES._row, { alignItems: "center", paddingTop: 15 }]}>
            <Text style={[STYLES._formInputTitre, { fontSize: 20 }]}>
              {"Tâches d'aujourd'hui"}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ListeTâches')}>
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
