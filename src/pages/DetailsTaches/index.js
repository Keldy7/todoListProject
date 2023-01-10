import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import Icone from "@expo/vector-icons/MaterialCommunityIcons";
import STYLES from "../../styles";
import { COLORS, FONTS, SIZES } from "../../constants";
import Bouton from "../../components/bouton";

const DetailsTaches = () => {
  // const tacheModifiee = {
  //   titreTache: titre,
  //   descriptionTache: description,
  //   dateD: dateDebut,
  //   dateF: dateFin,
  //   statut: statut,
  // };
  return (
    <SafeAreaView style = {[STYLES._container, { paddingTop: 10 }]}>
      <ScrollView style = {{ padding: SIZES.padding }}>
        <Text style = {[STYLES._titre]}>Nom de la tâche</Text>
        <View style = {STYLES._sectionDetailTache}>
          <View style = {STYLES._demiSectionDetailTache}>
              <View style={[
                  STYLES._bgIcon,
                  STYLES._centrerAligner, { 
                  backgroundColor: COLORS.jauneOr,
              }]}>
                  <Icon name="calendar" size={30} color={COLORS.jauneClair} />
              </View>
              <Text style = {STYLES._labelDetailTache}>Du 05/09/2022 au 27/09/2022</Text>
          </View>
          <View style = {STYLES._demiSectionDetailTache}>
              <View style={[
                  STYLES._bgIcon,
                  STYLES._centrerAligner, { 
                  backgroundColor: COLORS.bluePale,
              }]}>
                  <Icone name="list-status" size={30} color={COLORS.bleuClair} />
              </View>
              <Text style = {STYLES._labelDetailTache}>Statut: Non demarré</Text>
          </View>
        </View>
        <View style = {STYLES._sectionDetailTache}>
            <Text style = {[STYLES._titre, {...FONTS.h2, lineHeight: 36}]}>Description</Text>
            <Text style = {{ ...FONTS.h3, paddingBottom: SIZES.spacing }}>
              Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
              Harum, enim? Quam tempora sed ut odio
              fugiat dolor velit, non,  blanditiis
              debitis adipisci repellat repudiandae
              reprehenderit? Facilis dolor amet sapiente praesentium!
          </Text>
        </View>
      <Bouton btn_texte= {"Modifier"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsTaches;
