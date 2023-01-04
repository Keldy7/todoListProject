import { View, Text } from "react-native"
import React from "react"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Connexion, Menu } from "../pages"
import { COLORS } from "../constants"



const RootStack = createStackNavigator();

const Accueil = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator 
        initialRouteName="HomePage"
        screenOptions = {{
          gestureEnabled: true,
          headerStyle: { backgroundColor: COLORS.bluePale},
          headerTitleStyle: { fontSize: 18}
        }}
      >
        <RootStack.Screen
          name="HomePage"
          component={Menu}
          options = {() => ({
            title: "Accueil",
            headerLeft: () => (
              <Icon name = "menu" 
              size = {30} 
              color = {COLORS.noir} 
              style={{ width: 30 }} 
              onPress = {() => alert('menu ok')}
              />
            ),
            headerRight: () => (
              <Icon name = "bell-outline" 
              size = {30} 
              color = {COLORS.noir} 
              style={{ width: 30 }} />
            )
          })} 
        />
        <RootStack.Screen
          name="ConnexionPage"
          component={Connexion}
          options={{ title: "Connectez-vous" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Accueil;
