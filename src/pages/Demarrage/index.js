import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { DONNEES }  from "../../constants";


export default function index() {
  const [showHomePage, setShowHomePage] = useState(true);

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage) {
    return(
      <AppIntroSlider
        data={ DONNEES }
        renderItem={({item}) => {
          return(
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 100,
            }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}>
                {item.titre}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                color: COLORS.title
              }}>
                {item.texte}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    )
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

return(
  <Connexion />
)
}
