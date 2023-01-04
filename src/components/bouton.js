import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import STYLES from "../styles";

const Bouton = (props) => {
  const {btn_texte} = props;
  return (
        <TouchableOpacity
            onPress = {() => {
                console.log("Bouton pressé");
            }}
            style = {[STYLES._btn, STYLES._centrerAligner]}
        >
            {/* <Icon name="account" size={30} color = {COLORS.jauneOr} style={{ width: 30 }} /> */}
            <Text
                style = {{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 18,
                    color: COLORS.blanc
                }}
            >
                {btn_texte}
            </Text>
        </TouchableOpacity>
    );
};


export default Bouton;

