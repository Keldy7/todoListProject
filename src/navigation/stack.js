import React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { Taches, CreerTaches, Menu } from "../pages";
import { COULEURS, SIZES } from "../constants";
import { TouchableOpacity, View } from "react-native";
import { IconDroit, IconRetour } from "../components/icone";
import { EnCoursTaches, NonDemarrerTaches, TerminerTaches } from "../pages/CategoriesTaches";
import STYLES from "../styles";
import DetailsTaches from "../pages/DetailsTaches";

const RootStack = createStackNavigator();

const Accueil = () => {
  return (
    <RootStack.Navigator
      initialRouteName = "HomePage"
      screenOptions = {{
        gestureEnabled: true,
        headerStyle: { backgroundColor: COULEURS.bluePale, width: SIZES.largeur},
      }}
    >
      {/* Menu principal */}
      <RootStack.Screen
        name = "HomePage"
        component = {Menu}
        options = {() => ({
          title: "TimeToDo",
          headerTitleStyle: {
            color: COULEURS.jauneOr,
            fontSize: SIZES.h1,
            fontWeight: "bold",
            alignSelf: 'center'
          },
          headerLeft: () => (
            <View
              style={[
                STYLES._row,
                STYLES._centrerAligner,
                { marginLeft: 10, marginRight: 65 },
              ]}
            >
              <TouchableOpacity onPress={() => console.log("calendrier")}>
                <Icon
                  name = "menu"
                  size = {30}
                  color = {COULEURS.noir}
                  style = {{ width: 30 }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <IconDroit nomIcone = "search" navig = "rechercher" />,
        })}
      />

      {/* Interface de création de tâches */}
      <RootStack.Screen name = "Créer" component = {CreerTaches} />

      {/* Interface de détails des tâches */}
      <RootStack.Screen
        name = "Détails"
        component = {DetailsTaches}
      />

      {/* Interface de listing des tâches */}
      <RootStack.Screen name = "ListeTâches" component = {Taches} />

      {/* Interface de listing des tâches non demarrées */}
      <RootStack.Screen
        name = "ListeTâchesNonDemarrees"
        component = {NonDemarrerTaches}
        options = {() => ({
          title: "Tâches non demarrées",
          headerTitleStyle: {
            color: COULEURS.jauneOr,
            fontSize: SIZES.h2,
            fontWeight: "bold",
            alignSelf: 'center'
          },
          headerLeft: () => <IconRetour />,
        })}
      />

      {/* Interface de listing des tâches en cours */}
      <RootStack.Screen
        name = "ListeTâchesEncours"
        component = {EnCoursTaches}
        options = {() => ({
          title: "Tâches en cours",
          headerTitleStyle: {
            color: COULEURS.jauneOr,
            fontSize: SIZES.h2,
            fontWeight: "bold",
          },
          headerLeft: () => <IconRetour />,
        })}
      />

      {/* Interface de listing des tâches terminées */}
      <RootStack.Screen
        name = "ListeTâchesTerminees"
        component = {TerminerTaches}
        options = {() => ({
          title: "Tâches terminées",
          headerTitleStyle: {
            color: COULEURS.jauneOr,
            fontSize: SIZES.h2,
            fontWeight: "bold",
          },
          headerLeft: () => <IconRetour />,
        })}
      />
    </RootStack.Navigator>
  );
};

export default Accueil;
