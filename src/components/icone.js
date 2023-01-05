import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icone from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants";
import STYLES from "../styles";

export const IconDroit = (props) => {
  const { nomIcone, navig } = props; //Titre du navbar
  return (
    <TouchableOpacity
      onPress={() => {
        console.log({navig});
      }}
    >
      <Icon
        name={nomIcone}
        size={33}
        color={COLORS.noirFonce}
        style={{ width: 45 }}
      />
    </TouchableOpacity>
  );
};

export const IconRetour = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        STYLES._row,
        STYLES._centrerAligner,
        { marginLeft: 10, marginRight: 65 },
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
          color={COLORS.noir}
          style={{ width: 45 }}
        />
      </TouchableOpacity>
    </View>
  );
};
