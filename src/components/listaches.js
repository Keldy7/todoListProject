import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS, DONNEES } from "../constants";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import STYLES from "../styles";

const Listing = () => {
  return (
    <View style={{ paddingTop: 10 }}>
      <Text>Listing</Text>
      <FlatList
        data={DONNEES}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => console.log("ok")}
          >
            <View style={styles.itemLeft}>
              <View>
                <Icon
                  name="notebook-outline"
                  size={40}
                  color={COLORS.jauneOr}
                  style={{ width: 45 }}
                />
              </View>
              <Text style={styles.itemText}>{item.titre}</Text>
            </View>
            <View>
              <Icon
                name="chevron-right"
                size={43}
                color={COLORS.bluePale}
                style={{ width: 45 }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
  },
});

export default Listing;
