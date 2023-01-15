import { SafeAreaView, ScrollView, Text, View } from "react-native";
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
          <View>
            <Section titreSection = {"Profil"} iconSection = {"account"} />
            <Section titreSection = {"Aide"} iconSection = {"help-circle-outline"}/>
            <Section titreSection = {"Confidentialité et Politique"} iconSection = {"security"}/>
            <Section titreSection = {"Partage TimeToDo"} iconSection = {"share-variant-outline"}/>
          </View>
            
          <View style = {[STYLES._centrerAligner, { paddingTop: 25 }]}>
            <Text style = {{fontSize: 10, fontStyle: "italic"}}> ©Copyrigth Version 1.0 __{new Date().getFullYear()}__</Text> 
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Parametres;
  