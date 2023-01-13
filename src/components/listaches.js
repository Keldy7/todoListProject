import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react"
import { useSelector,useDispatch } from "react-redux";
import { COULEURS } from "../constants"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native"
import STYLES from "../styles"
import { ajouterTacheCourante } from "../redux/tacheCourante.reducer";

//Composant listant toutes les tâches enregistrées dans l'app
const Listing = () => {
  const navigation = useNavigation(); 

  const dispatch = useDispatch();
  const listeTaches = useSelector(state => state.taches.taches);
  const lesTaches = listeTaches.filter(tache => tache.statut)
  
  const AucuneTache = () =>(
    <View style = {{ alignItems: 'center', marginBottom: 10 }}>
      <Text style = {[STYLES._formInputTitre, {color: COULEURS.noir, fontWeight: "normal"}]}>Aucune tâche</Text>
    </View>
  )

  const AfficherTache = (tache) => {
    //ajouter une tache courante dans le state
    dispatch(ajouterTacheCourante(tache));
    navigation.navigate('Détails');
  };

  return (
    <View style = {{ paddingTop: 15 }}>
      <FlatList
        data = {lesTaches}
        ListEmptyComponent = { AucuneTache }
        renderItem = {({ item }) => (
          <TouchableOpacity
            style = {STYLES._item}
            onPress = {() =>
              AfficherTache(item)
            }
          >
            <View style = {STYLES._itemLeft}>
              <View>
                <Icon
                  name = "notebook-outline"
                  size = {40}
                  color = {COULEURS.jauneOr}
                  style = {{ width: 50 }}
                />
              </View>
                <Text style = {STYLES._itemText}>{item.titreTache}</Text>
            </View>
            <View>
              <Icon
                name = "chevron-right"
                size = {43}
                color = {COULEURS.bluePale}
                style = {{ width: 45 }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};



export default Listing;
