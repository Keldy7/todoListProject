import React, { useState } from "react"
import { Image, SafeAreaView, Text, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import { COLORS, SIZES, DONNEES } from "./src/constants"
import  {Accueil} from "./src/navigation"
import { Menu } from "./src/pages"


export default function App() {
  const [afficherMenu, setAfficherMenu] = useState(false);

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

  if (afficherMenu) {
    
    return <Accueil />
    // return <Menu />

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
                padding: 15,
                paddingTop: 50,
              }}
            >
              <Image
                source = {item.uri}
                style = {{
                  resizeMode: "contain",
                  height: "70%",
                  width: "100%",
                  //backgroundColor: 'rgb(188, 220, 226)'
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