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
import { useNavigation } from "@react-navigation/native";


const Listing = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{ paddingTop: 15 }}>
      <FlatList
        data={DONNEES}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Détails')}
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
    backgroundColor: COLORS.grisClair,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    maxWidth: "80%",
  },
});

export default Listing;
