import React, { useState } from "react"
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES, DONNEES } from "./src/constants"
import  {TabBar} from "./src/navigation"
import STYLES from "./src/styles";


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
  const BtnTerminer = () => {
    return (
      <TouchableOpacity
        onPress = {() => setAfficherMenu(true)}
      >
        <View style = {STYLES._bgIcon}>
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
    return <TabBar />
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