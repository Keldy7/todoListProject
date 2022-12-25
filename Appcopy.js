import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { DONNEES }  from "./src/constants";


export default class App extends Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
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
}
