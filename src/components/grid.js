import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icone from "@expo/vector-icons/Ionicons"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { COULEURS, SIZES } from "../constants";
import STYLES from "../styles";
import { supprimerTache } from "../redux/tachesReducer";


/*
  Composant Grille ayant des props qui seront 
  définies lorsqu'il sera utilisé 
*/
const Grille = props => {
  const listeTaches = useSelector(state => state.taches.taches);
  const dispatch = useDispatch();

  const effacerTache = async () => {
    dispatch(supprimerTache(props.id));

    //On tente de supprimer une tâche
    try {
      await AsyncStorage.setItem(
        'SUPPRIMER_TACHE', 
        JSON.stringify(listeTaches.filter(tache => tache.id !== props.id)
      ));
      console.log("id de la tâche supprimée: ",props.id);

    } catch (e) {
      console.log("Erreur de suppression de tâches: ",e);
    }

  };
  const { bgColor, nomIcone, label, width, btnPress, affichPoubelle } = props;
  
  return (
    <View style={[STYLES._grid, { flex: 1, width: width }]}>
      <TouchableOpacity activeOpacity={0.7} onPress={btnPress}>
        <View style={[styles._bgImage, { backgroundColor: bgColor, alignItems: 'center' }]}>
        <Icon name={nomIcone} size={90} color={COULEURS.blanc} />
        </View>
      </TouchableOpacity>

      <View style={[STYLES._gridDetails, STYLES._row]}>
        <Text style={styles._texte}>{label}</Text>
        {/* Afficher l'icone poubelle si l'élement peut être supprimé */}
        { affichPoubelle && (
          <TouchableOpacity activeOpacity={0.7} onPress={effacerTache}>
            <Icone name="trash-outline" size={22} color={COULEURS.noir} />
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
};

export default Grille;

const styles = StyleSheet.create({
  _bgImage: {
    height: 9 * SIZES.spacing,
    margin: 5,
    borderRadius: SIZES.radius,
  },

  _texte: {
    fontWeight: "bold",
    fontSize: SIZES.font,
    color: COULEURS.noir,
  }
});
