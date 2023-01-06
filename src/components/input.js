import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { COLORS, SIZES } from '../constants'
import STYLES from '../styles'

const ZoneDeSaisie = ({label, ...props}) => {
    return (
        <View style = {{ margin: '3%'}}>
            <Text style = {[STYLES._formInputTitre, {fontSize: SIZES.h2}]}>{label}</Text>
            <View style = {STYLES._formInput}>
                <TextInput
                    style = {STYLES._formInputTexte}
                    {...props}
                    placeholderTextColor = {COLORS.noirGris}
                />
            </View>
        </View>
  )
}

export default ZoneDeSaisie