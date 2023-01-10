import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import { Avatar } from "react-native-paper";
  import { COLORS, SIZES } from "../../constants";
  import STYLES from "../../styles";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  
  const Parametres = () => {
    return (
      <SafeAreaView style={[STYLES._container, { paddingTop: 25 }]}>
        <View style={[STYLES._centrerAligner, { padding: SIZES.padding }]}>
          <Avatar.Icon
            size={180}
            icon="account"
            style={{ backgroundColor: COLORS.bluePale }}
          />
        </View>
        <ScrollView>
          <View style={{ margin: 3 }}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => alert("Pas disponible pour l'instant")}
            >
              <View style={styles.itemLeft}>
                <View>
                  <Icon
                    name="account-settings-outline"
                    size={40}
                    color={COLORS.jauneOr}
                    style={{ width: 45 }}
                  />
                </View>
                <Text style={styles.itemText}>Profil</Text>
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
          </View>
          <View style={{ margin: 3 }}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => alert("Pas disponible pour l'instant")}
            >
              <View style={styles.itemLeft}>
                <View>
                  <Icon
                    name="earth"
                    size={40}
                    color={COLORS.jauneOr}
                    style={{ width: 45 }}
                  />
                </View>
                <Text style={styles.itemText}>Langue</Text>
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
          </View>
          <View style={{ margin: 3 }}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => alert("Pas disponible pour l'instant")}
            >
              <View style={styles.itemLeft}>
                <View>
                  <Icon
                    name="help-circle-outline"
                    size={40}
                    color={COLORS.jauneOr}
                    style={{ width: 45 }}
                  />
                </View>
                <Text style={styles.itemText}>Aide</Text>
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
          </View>
          <View style={{ margin: 3 }}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => alert("Pas disponible pour l'instant")}
            >
              <View style={styles.itemLeft}>
                <View>
                  <Icon
                    name="security"
                    size={40}
                    color={COLORS.jauneOr}
                    style={{ width: 45 }}
                  />
                </View>
                <Text style={styles.itemText}>Confidentialité et Politique</Text>
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
          </View>
          <View style={{ margin: 3 }}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => alert("Pas disponible pour l'instant")}
            >
              <View style={styles.itemLeft}>
                <View>
                  <Icon
                    name="share-variant-outline"
                    size={40}
                    color={COLORS.jauneOr}
                    style={{ width: 45 }}
                  />
                </View>
                <Text style={styles.itemText}>Partage TimeToDo</Text>
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
          </View>
        </ScrollView>
      </SafeAreaView>
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
      width: "100%",
    },
    itemLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    itemText: {
      maxWidth: "80%",
    },
  });
  
  export default Parametres;
  