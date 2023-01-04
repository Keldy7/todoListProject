import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import Bouton from '../../components/bouton'
import ZoneDeSaisie from "../../components/input"
import { COLORS } from "../../constants"
import STYLES from "../../styles"

const CreerTaches = () => {
    return (
        <View>
            <View style = {STYLES._navBar}>
                <TouchableOpacity onPress = {() => {console.log("Appuyez"); }}
                    style = {STYLES._bgIcon}>
                    <Icon 
                        name = "chevron-left" 
                        size = {43} 
                        color = {COLORS.noirFonce} 
                        style = {{ width: 45 }} 
                    />
                </TouchableOpacity>
                <Text style = {{ paddingLeft: 65, fontWeight: "bold", fontSize: 22, color: COLORS.jauneOr  }}>Créer une tâche</Text>               
            </View>
            <ZoneDeSaisie
                label = {"Nom de la tâche"}
                placeholder = {"Ex: Course à Bon Prix"}
                autoCapitalize = {"none"}
                error = {""}
            />
            <View style = {STYLES._row}>
                <Bouton btn_texte = {"Travail"}/>
                <Bouton btn_texte = {"Personnel"}/>
                <Bouton btn_texte = {"Sans catégorie"}/>
            </View>
            <View style = {{ 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '2%'
             }}>
                <View style = {{ width: '34%' }}>
                    <ZoneDeSaisie
                        label = {"Date de début"}
                        placeholder = {"Ex: 11/11/2009"}
                    />
                </View>
                <View style = {{ width: '34%'}}>
                    <ZoneDeSaisie
                        label = {"Date de fin"}
                        placeholder = {"Ex: 11/11/2009"} 
                    />
                </View>
            </View>
            <ZoneDeSaisie
                style = {[STYLES._formInputTexte , {height: 150}]}
                label = {"Description"}
                placeholder = {"Ex: Course à Bon Prix"}
                autoCapitalize = {"none"}
                multiline = {true}
                numberOfLines = {4}
                error = {""}
            />
            <Bouton btn_texte = {"Créer"} />
        </View>
    );
};

export default CreerTaches;
