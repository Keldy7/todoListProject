import React, { useState } from "react"
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES, DONNEES } from "./src/constants"
import  {TabBar} from "./src/navigation"
import STYLES from "./src/styles";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";


export default function App() {

  const [afficherMenu, setAfficherMenu] = useState(false);

  //Bouton pour faire défiler les img d'introduction
  const btnDirection = (texte) => {
    return (
      <View
        style = {{
          padding: 12,
        }}
      >
        <Text
          style = {{
            color: COLORS.bluePale,
            fontWeight: "600",
            fontSize: SIZES.h3,
          }}
        >
          {texte}
        </Text>
      </View>
    );
  };

  //Bouton pour sauter les images d'introduction
  const BtnTerminer = () => {
    return (
      <TouchableOpacity
        onPress = {() => setAfficherMenu(true)}
      >
        <View style = {[
          STYLES._bgIcon,
          STYLES._centrerAligner, { 
          backgroundColor: COLORS.jauneOr,
        }]}>
          <Icon
            name="arrow-right"
            size={40}
            color={COLORS.bluePale}
            style={{ width: 45 }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  if (afficherMenu) {
    /*Lorsque les 3 images d'introduction ont été
      slidées, on affiche la barre de navigation du bas
    */
    return (
      <Provider store = {store}>
        <TabBar />
      </Provider>
    ) 
  } else {
    return (
      <AppIntroSlider
        data = { DONNEES }
        renderItem = {({ item }) => {
          return (
            <SafeAreaView
              style = {{
                flex: 1,
                alignItems: "center",
                padding: 10,
                paddingTop: 30,
              }}
            >
              <BtnTerminer />
              <Image
                source = {item.uri}
                style = {{
                  resizeMode: "contain",
                  height: "60%",
                  width: "100%",
                }}
              />
              <Text
                style = {{
                  fontWeight: "bold",
                  paddingBottom: SIZES.spacing,
                  color: COLORS.jauneOr,
                  fontSize: SIZES.h1,
                }}
              >
                {item.titre}
              </Text>
              <Text
                style = {{
                  textAlign: "center",
                  paddingHorizontal: 3 * SIZES.spacing,
                  fontSize: 15,
                  color: COLORS.noir,
                }}
              >
                {item.texte}
              </Text>
              </SafeAreaView>
          );
        }}
        //Lorsque l'image est active, l'indicateur de pages passe au gris
        activeDotStyle = {{
          backgroundColor: COLORS.gris,
          width: 3 * SIZES.spacing,
        }}
        showPrevButton
        renderNextButton = {() => btnDirection("Suivant")}
        renderPrevButton = {() => btnDirection("Précedent")}
        renderDoneButton = {() => btnDirection("Terminé")}
        onDone = {() => setAfficherMenu(true)}
      />
    );
  }
}