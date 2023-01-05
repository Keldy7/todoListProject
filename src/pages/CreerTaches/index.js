import React from "react";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Bouton from "../../components/bouton";
import ZoneDeSaisie from "../../components/input";
import Navbar from "../../components/navbar";
import { COLORS, SIZES } from "../../constants";
import STYLES from "../../styles";

const CreerTaches = () => {
  return (
    <SafeAreaView style={[STYLES._container, {paddingTop: 25}]}>
      <View style={{ padding: SIZES.padding }}>
        <ZoneDeSaisie
          label={"Nom de la tâche"}
          placeholder={"Ex: Course à Bon Prix"}
          autoCapitalize
          error={""}
        />
        <View style={STYLES._row}>
          <Bouton btn_texte={"Travail"} />
          <Bouton btn_texte={"Personnel"} />
          <Bouton btn_texte={"Sans catégorie"} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <View style={{ width: "34%" }}>
            <ZoneDeSaisie
              label={"Date de début"}
              placeholder={"Ex: 11/11/2009"}
            />
          </View>
          <View style={{ width: "34%" }}>
            <ZoneDeSaisie
              label={"Date de fin"}
              placeholder={"Ex: 11/11/2009"}
            />
          </View>
        </View>
        <ZoneDeSaisie
          style={[STYLES._formInputTexte, { height: 150 }]}
          label={"Description"}
          placeholder={"Ex: Course à Bon Prix"}
          autoCapitalize
          multiline={true}
          numberOfLines={4}
          error={""}
        />
        <Bouton btn_texte={"Créer"} />
      </View>
    </SafeAreaView>
  );
};

export default CreerTaches;
