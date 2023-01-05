import React, { useEffect, useState } from "react"
import Icone from "@expo/vector-icons/MaterialCommunityIcons"
import Icon from "@expo/vector-icons/Ionicons"
import { createStackNavigator } from "@react-navigation/stack"
import { Connexion, CreerTaches, Menu } from "../pages"
import { COLORS, SIZES } from "../constants"
import { Text, TouchableOpacity, View } from "react-native"
import STYLES from "../styles"
import DetailsTaches from "../pages/DetailsTaches"
import { IconDroit, IconRetour } from "../components/icone"

const RootStack = createStackNavigator();

const Accueil = () => {
  return (
      <RootStack.Navigator 
        initialRouteName="HomePage"
        screenOptions = {{
          gestureEnabled: true,
          headerStyle: { backgroundColor: COLORS.bluePale}
        }}
      >
        <RootStack.Screen
          name="HomePage"
          component={Menu}
          options = {() => ({
            title: "TimeToDo",
            headerTitleStyle: { color: COLORS.jauneOr, fontSize: SIZES.h1, fontWeight: "bold" },
            headerLeft: () => (
              <View
                style={[STYLES._row, STYLES._centrerAligner, {marginLeft: 10,  marginRight: 65}]}
              >
                <TouchableOpacity onPress={() => console.log("ok")}>
                <Icon name = "calendar-outline" 
                  size = {30} 
                  color = {COLORS.noir} 
                  style = {{ width: 30}}
               />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <IconDroit nomIcone = "search" navig = "search" />
              
            )
          })} 
        />
        <RootStack.Screen
          name="ConnexionPage"
          component={Connexion}
        />
        <RootStack.Screen
          name="Créer"
          component={CreerTaches}
        />
        <RootStack.Screen
          name="Détails"
          component={DetailsTaches}
          options = {() => ({
            title: "Détails de la tâche",
            headerTitleStyle: { color: COLORS.jauneOr, fontSize: SIZES.h2, fontWeight: "bold" },
            headerLeft: () => (
              <IconRetour />
            ),
            headerRight: () => (
              <IconDroit nomIcone = "trash-outline" navig = "delete" />
            )
          })} 
        />
      </RootStack.Navigator>
  );
};

export default Accueil;

