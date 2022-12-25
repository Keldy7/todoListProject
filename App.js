import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Connexion } from "./src/pages";
import { COLORS, SIZES, DONNEES } from "./src/constants";

export default function App() {
  const [afficherMenu, setAfficherMenu] = useState(false);

  //StatusBar.setStatusBarStyle("light");
  //StatusBar.setStatusBarBackgroundColor(COLORS.jaune);

  const bouton = (texte) => {
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
    return <Connexion />
  } else {
    return (
      <AppIntroSlider
        data = { DONNEES }
        renderItem = {({ item }) => {
          return (
            <View
              style = {{
                flex: 1,
                alignItems: "center",
                padding: 15,
                paddingTop: 70,
              }}
            >
              <Image
                source = {item.uri}
                style = {{
                  resizeMode: "contain",
                  height: "70%",
                  width: "100%",
                }}
              />
              <Text
                style = {{
                  fontWeight: "bold",
                  paddingTop: SIZES.padding,
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
            </View>
          );
        }}
        activeDotStyle = {{
          backgroundColor: COLORS.noirGris,
          width: 3 * SIZES.spacing,
        }}
        showPrevButton
        renderNextButton = {() => bouton("Suivant")}
        renderPrevButton = {() => bouton("Précedent")}
        renderDoneButton = {() => bouton("Terminé")}
        onDone = {() => setAfficherMenu(true)}
      />
    );
  }
}

  /*_renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "contain",
            height: "73%",
            width: "100%",
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
          }}
        >
          {item.titre}
        </Text>

        <Text
          style={{
            textAlign: "center",
            color: "#b5b5b5",
            fontSize: 15,
            paddingHorizontal: 30,
          }}
        >
          {item.texte}
        </Text>
      </View>
    );
  };

  render() {
    if (this.state.showHomePage) {
      return <App />;
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={DONNEES}
          activeDotStyle={{
            backgroundColor: "#21465b",
            width: 30,
          }}
        />
      );
  }
}*/

