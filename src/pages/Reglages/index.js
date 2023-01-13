import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { COULEURS, SIZES } from "../../constants";
import STYLES from "../../styles";
import Section from "../../components/section";
  
  const Parametres = () => {
    return (
      <SafeAreaView style={[STYLES._container, { paddingTop: 25 }]}>
        <View style={[STYLES._centrerAligner, { padding: SIZES.padding }]}>
          <Avatar.Icon
            size={180}
            icon="account"
            style={{ backgroundColor: COULEURS.bluePale }}
          />
        </View>
        <ScrollView>
          <Section titreSection = {"Profil"} iconSection = {"account"} />
          <Section titreSection = {"Aide"} iconSection = {"help-circle-outline"}/>
          <Section titreSection = {"Confidentialité et Politique"} iconSection = {"security"}/>
          <Section titreSection = {"Partage TimeToDo"} iconSection = {"share-variant-outline"}/>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Parametres;
  