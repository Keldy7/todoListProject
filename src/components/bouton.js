import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COULEURS } from "../constants";
import STYLES from "../styles";

/*
    Composant Bouton qui a pour props le texte à afficher sur le bouton
    et l'interface à afficher lorsque le bouton est actionné
*/
const Bouton = props => {
  const {btn_texte, btn_press} = props;
  return (
        <TouchableOpacity
            onPress = {btn_press}
            style = {[STYLES._btn, STYLES._centrerAligner]}
        >
            <Text
                style = {{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 18,
                    color: COULEURS.blanc
                }}
            >
                {btn_texte}
            </Text>
        </TouchableOpacity>
    );
};


export default Bouton;

