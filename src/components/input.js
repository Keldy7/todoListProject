import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { COLORS } from '../constants'
import STYLES from '../styles'

const ZoneDeSaisie = ({label, motdepasse, error, ...props}) => {
    const [estFocus, setEstFocus] = useState(false);
    const [cacherMdp, setCacherMdp] = useState(motdepasse);

    return (
    <View style = {{ margin: '3%'}}>
      <Text style = {[STYLES._formInputTitre]}>{label}</Text>
      <View style = {STYLES._formInput}>
        <TextInput
        style = {STYLES._formInputTexte}
            secureTextEntry = {cacherMdp}
            {...props}
            placeholderTextColor = {COLORS.noirGris}
            onFocus = {() => {
                setEstFocus(true);
            }}
            onBlur = {() => {
                setEstFocus(false);
            }}
        />
        {motdepasse && (
            <TouchableOpacity onPress={() => {setCacherMdp(cacherMdp)}}>
                {cacherMdp ? (
                    <Icon 
                        name = "eye" 
                        size = {30} 
                        color = {COLORS.jauneOr} 
                        style={{ width: 30 }} 
                    />
                ) : (
                    <Icon 
                    name = "eye-off" 
                    size = {30} 
                    color = {COLORS.jauneOr} 
                    style={{ width: 30 }} 
                />
                )}
            </TouchableOpacity>
        )}    
      </View>
    </View>
  )
}

export default ZoneDeSaisie