import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Connexion, Menu } from "../pages";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const MainDrawer = createDrawerNavigator();

//Fonction qui affiche l'icône dans le drawer en fonction du nom de l'interface désignée en parametres
const icons = (page) => {
  switch (page) {
    case "Toutes les taches":
      return "bookmark";
    case "Travail":
      return "job";
    case "Personnel":
      return "life";
    default:
      return undefined;
  }
};
const ContentDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
const Options = () => {
  return (
    <MainDrawer.Navigator
      //drawerContent={props => <ContentDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <MainDrawer.Screen
        name="ConnexionPage"
        component={Connexion}
        options={{
          drawerIcon: () => <Icon name="home-outline" size={22} color="red" />,
        }}
      />
      <MainDrawer.Screen
        name="HomePage"
        component={Menu}
        options={{
          drawerIcon: () => (
            <Icon name="person-outline" size={22} color="red" />
          ),
        }}
      />
    </MainDrawer.Navigator>
  );
};

export default Options;
