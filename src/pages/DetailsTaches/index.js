import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import STYLES from '../../styles'
import { SIZES } from '../../constants'

const DetailsTaches = () => {
  return (
    <SafeAreaView style={[STYLES._container, {paddingTop: 25}]}>
      <View style={{ padding: SIZES.padding }}> 
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DetailsTaches