import React from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import Bouton from "../../components/bouton";
import ZoneDeSaisie from "../../components/input";
import { SIZES } from "../../constants";
import STYLES from "../../styles";
import Calendrier from "../../components/calendrier";

//Formulaire de création de tâches
const CreerTaches = () => {
  return (
    <SafeAreaView style={[STYLES._container, {paddingTop: 25}]}>
      <ScrollView style={{ padding: SIZES.padding }}>
        <ZoneDeSaisie
          label={"Nom de la tâche"}
          placeholder={"Ex: Course à Bon Prix"}
          autoCapitalize
        />
        <View style = {{ margin: '3%'}}>
          <Calendrier />
        </View>
        <ZoneDeSaisie
          style={[STYLES._formInputTexte, { height: 150 }]}
          label={"Description"}
          placeholder={"Ex: Course à Bon Prix"}
          autoCapitalize
          multiline={true}
          numberOfLines={4}
        />
        <Bouton btn_texte={"Créer"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreerTaches;
