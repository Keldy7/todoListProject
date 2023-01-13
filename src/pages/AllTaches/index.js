import React, { useLayoutEffect } from "react";
import { FlatList, View, Text, SafeAreaView } from "react-native";
import Grille from "../../components/grid";
import STYLES from "../../styles";
import { COULEURS, SIZES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { IconRetour } from "../../components/icone"
import { ajouterTacheCourante } from "../../redux/tacheCourante.reducer";

  
//Si aucune tâche n'est enregistrée
export const AucuneTache = ({phrase}) =>(
  <View 
    style = {[
      {flex: 1, marginTop: '100%', marginBottom: '100%'},
      STYLES._centrerAligner
    ]}
  >
    <Text style = {[STYLES._titre, { fontSize: 20 }]}>{phrase}</Text>
  </View>
)

//Afficher la liste de toutes les tâches enregistrées
const Taches = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: { backgroundColor: COULEURS.bluePale},
      headerTitle: "Liste des tâches",
      headerTitleStyle: { color: COULEURS.jauneOr, fontSize: SIZES.h2, fontWeight: "bold" },
      headerLeft: () => (
        <IconRetour />
      )
    });
  })

  //On récupère les taches à partir de leur statut
  const taches = useSelector(state => state.taches.taches)
  const lesTaches = taches.filter(tache => tache.statut)

  const afficherTache = (tache) => {
    //ajouter une tache courante dans le state
    dispatch(ajouterTacheCourante(tache));
    navigation.navigate('Détails');
  };
  
  return (
    <SafeAreaView style = {[STYLES._container, { paddingTop: 25}]}>
      <View style = {{ padding: SIZES.padding }}>
        <FlatList
          data = {lesTaches}
          keyExtractor = {item => item.id.toString()}
          renderItem = {({ item }) => {
            //Si la tache n'est pas encore demarrée le bg est rouge
            if(item.statut == "Non demarrée") {
              return (
                <View style = {STYLES._dispoWrap}>
                  <Grille
                    bgColor = {COULEURS.rouge}
                    nomIcone = "note-remove-outline"
                    label = {item.titreTache}
                    btnPress = {() => afficherTache(item)}
                    affichPoubelle
                    width = "100%"
                    {...item}
                  />
                </View>
              )
            } else if (item.statut == "En cours"){
            //Si la tache est en cours le bg est orangé
              return (
                <View style = {STYLES._dispoWrap}>
                  <Grille
                    bgColor = {COULEURS.warning}
                    nomIcone = "note-alert-outline"
                    label = {item.titreTache}
                    btnPress = {() => afficherTache(item)}
                    affichPoubelle
                    width = "100%"
                    {...item}
                  />
                </View>
              )
            } else {
            //Si la tache est terminée le bg est vert
              return (
                <View style = {STYLES._dispoWrap}>
                  <Grille
                    bgColor = {COULEURS.succes}
                    nomIcone = "note-check-outline"
                    label = {item.titreTache}
                    btnPress = {() => navigation.navigate("Détails")}
                    affichPoubelle
                    width = "100%"
                    {...item}
                  />
                </View>
              ) 
            }
            
          }}
          //Message lorsqu'aucune tâche a été enregistré
          ListEmptyComponent = { <AucuneTache phrase = {"Aucune tâche enregistrée"} /> }
        />
   
      </View>
    </SafeAreaView>
  )
}

export default Taches