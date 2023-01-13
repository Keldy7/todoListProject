import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Platform, View } from "react-native"
import Icon from "@expo/vector-icons/Ionicons"
import Icone from "@expo/vector-icons/MaterialCommunityIcons";
import { CreerTaches, Taches, Parametres } from "../pages"
import Accueil from "./stack"
import { COULEURS } from "../constants"
import STYLES from "../styles"

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName = "Accueil"
      screenOptions = {
        ({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
              let iconNom;
              if (route.name === 'Accueil') {
                iconNom = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Paramètres') {
                iconNom = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Tâches') {
                iconNom = focused ? 'document-text' : 'document-text-outline';
            }
              return <Icon name={iconNom} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FDB90B',
          tabBarInactiveTintColor: '#625B5B',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: Platform.OS === 'ios' ? 10 : 5,
          },
          tabBarStyle: {
            borderTopWidth: 0,
            height: Platform.OS === 'ios' ? 90 : 60,
            paddingBottom: Platform.OS === 'ios' ? 20 : 5,
          }
        })
      }>
        <Tab.Screen 
          name = "Accueil" 
          component = {Accueil}
        />
        <Tab.Screen
          name = "Tâches"
          component = {Taches}
        />
        <Tab.Screen
          name = "Paramètres"
          component = {Parametres}
        />
        <Tab.Screen 
          name = "Créer"
          component = {CreerTaches} 
          options={{
            tabBarIcon: () => (
              <View style={[STYLES._bgIcon, STYLES._centrerAligner, { backgroundColor: COULEURS.jauneOr, marginBottom: Platform.OS == "android" ? 40 : 35 }]}>
                <Icone name="notebook-plus" size={30} color={COULEURS.bluePale} />
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabBar;
