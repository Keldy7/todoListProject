import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image, Platform, TouchableOpacity, View } from "react-native"
import Icon from "@expo/vector-icons/Ionicons"
import Icone from "@expo/vector-icons/MaterialCommunityIcons";
import { Connexion, CreerTaches } from "../pages"
import Accueil from "./stack"
import { COLORS } from "../constants"
import STYLES from "../styles"

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Accueil"
        screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Accueil') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Parametres') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Tâches') {
                      iconName = focused ? 'document-text' : 'document-text-outline';
                  }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FDB90B',
                tabBarInactiveTintColor: '#625B5B',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: Platform.OS === 'ios' ? 10 : 0,
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    height: Platform.OS === 'ios' ? 90 : 60,
                    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
                },

                headerShown: false
            })

        }>
        <Tab.Screen 
            name="Accueil" 
            component={Accueil}
        />
        <Tab.Screen
          name="Tâches"
          component={Connexion}
        />
        <Tab.Screen
          name="Parametres"
          component={Connexion}
        />
        <Tab.Screen name={"Créer"} component={CreerTaches} options={{
          tabBarIcon: () => (
              <View style={STYLES._bgIcon}>
                <Icone name="notebook-plus" size={30} color={COLORS.bluePale} />
              </View>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabBar;
