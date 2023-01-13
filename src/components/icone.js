import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icone from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "@expo/vector-icons/Ionicons";
import { COULEURS } from "../constants";
import STYLES from "../styles";

//Ces composants sont utilisés pour le header d'une interface

//Composant Icône de droite
export const IconDroit = (props) => {
  const { nomIcone, navig } = props; //Titre du navbar
  return (
    <TouchableOpacity
      onPress={() => {
        console.log({navig});
        //navig
      }}
    >
      <Icon
        name={nomIcone}
        size={33}
        color={COULEURS.noirFonce}
        style={{ width: 45 }}
      />
    </TouchableOpacity>
  );
};

//Composant Icône de gauche
export const IconRetour = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        STYLES._row,
        STYLES._centrerAligner
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icone
          name="chevron-left"
          size={43}
          color={COULEURS.noir}
          style={{ width: 45 }}
        />
      </TouchableOpacity>
    </View>
  );
};
