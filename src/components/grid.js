import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from "../constants";
import STYLES from "../styles";


const Grille = (props) => {
  const { bgColor, nomIcone, label, width } = props;
  return (
    <View style={[STYLES._grid, { flex: 1, width: width }]}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("ok")}>
        <View style={[styles.image, { backgroundColor: bgColor, alignItems: 'center' }]}>
        <Icon name={nomIcone} size={90} color={COLORS.blanc} />
        </View>
      </TouchableOpacity>
      <View style={STYLES._gridDetails}>
        <Text style={styles.name}>{label}</Text>
      </View>
    </View>
  );
};

export default Grille;

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 15,
    color: COLORS.noir,
  },
  image: {
    height: 90,
    margin: 5,
    borderRadius: 10,
  },
});
