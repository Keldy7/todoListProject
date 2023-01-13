import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { COULEURS, SIZES } from '../constants'
import STYLES from '../styles'

//Composant Zone de saisie
const ZoneDeSaisie = ({label, ...props}) => {
    return (
        <View style = {{ margin: '3%'}}>
            <Text style = {[STYLES._formInputTitre, {fontSize: SIZES.h2}]}>{label}</Text>
            <View style = {STYLES._formInput}>
                <TextInput
                    style = {STYLES._formInputTexte}
                    {...props}
                    placeholderTextColor = {COULEURS.noirGris}
                />
            </View>
        </View>
  )
}

// const ZoneDeSaisieModifiable = ({...props}) => {
//     return (
//         <View style = {{ margin: '3%'}}>
//             <View style = {STYLES._formInput}>
//                 <TextInput
//                     style = {[STYLES._formInputTexte, {...FONTS.h1}]}
//                     {...props}
//                 />
//             </View>
//         </View>
//   )
// }

export default ZoneDeSaisie