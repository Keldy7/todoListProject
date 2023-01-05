import React from 'react'
import { View, Text } from 'react-native'
import Bouton from '../../components/bouton'


const Connexion = () => {
  return (
    <View style= 
      {{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Connexion</Text>
      <Bouton btn_texte= {"Se connecter"} />
    </View>
  )
}

export default Connexion