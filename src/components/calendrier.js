import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../constants'
//import DatePicker from 'react-native-datepicker'

const Calendrier = () => {
  return (
    <View>
        <Text style = {[STYLES._titre]}>{"Calendrier"}</Text>
        <View>
            <View>
                <Text style = {[STYLES._titre]}>{"Date début"}</Text>
                <DatePicker
                    mode = "date"
                    placeholder = "Ex: 19/01/2023"
                    format = "DD/MM/YYYY"
                    minDate = "01/01/2022"
                    maxDate = "01/01/2122"
                    confirmBtnText = "Valider"
                    cancelBtnText = "Annuler"
                    customStyles = {{
                        iconDate: {
                            position: 'absolute',
                            rigth: -5,
                            top: 4
                        },
                        inputDate: {
                            borderColor: COLORS.jauneOr,
                            alignItems: 'flex-start',
                            borderWidth: 1.5
                        },
                        placeholderText: {
                            color: COLORS.blancCasse,
                            fontSize: 15
                        },
                        dateText: {
                            fontSize: 15
                        }
                    }}
                />
            </View>
            <View>
                <Text style = {[STYLES._titre]}>{"Date Fin"}</Text>

                <DatePicker
                    mode = "date"
                    placeholder = "Ex: 19/01/2023"
                    format = "DD/MM/YYYY"
                    minDate = "01/01/2022"
                    maxDate = "01/01/2122"
                    confirmBtnText = "Valider"
                    cancelBtnText = "Annuler"
                    customStyles = {{
                        iconDate: {
                            position: 'absolute',
                            rigth: -5,
                            top: 4
                        },
                        inputDate: {
                            borderColor: COLORS.jauneOr,
                            alignItems: 'flex-start',
                            borderWidth: 1.5
                        },
                        placeholderText: {
                            color: COLORS.blancCasse,
                            fontSize: 15
                        },
                        dateText: {
                            fontSize: 15
                        }
                    }}
            />
            </View>
        </View>
        
    </View>
  )
}

export default Calendrier