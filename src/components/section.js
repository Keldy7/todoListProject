import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COULEURS } from '../constants';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import STYLES from '../styles';

/* 
  Composant pour afficher les sections de 
  l'interface Paramètres
*/
const Section = props => {
    const { titreSection, iconSection } = props;
    return (
        <View style={{ margin: 3 }}>
                <TouchableOpacity 
                style={STYLES._item}
                onPress={() => alert("Pas disponible pour l'instant")}
                >
                <View style={STYLES._itemLeft}>
                    <View>
                    <Icon
                        // name="account-settings-outline"
                        name = {iconSection}
                        size={40}
                        color={COULEURS.jauneOr}
                        style={{ width: 45 }}
                    />
                    </View>
                    <Text style={STYLES._itemText}>{titreSection}</Text>
                </View>
                <View>
                    <Icon
                    name="chevron-right"
                    size={43}
                    color={COULEURS.bluePale}
                    style={{ width: 45 }}
                    />
                </View>
                </TouchableOpacity>
        </View>
    )
}


export default Section