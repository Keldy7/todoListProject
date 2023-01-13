import React, { useState} from 'react'
import { View, Text } from 'react-native'
import { COULEURS, SIZES } from '../constants'
import STYLES from '../styles'
import DatePicker from 'react-native-datepicker'

/*
    Composant Calendrier comportant les zones de saisies 
    de date de début et de date de fin
*/
const Calendrier = () => {
    const [dateDebut, setDateDebut] = useState(new Date());
    const [dateFin, setDateFin] = useState(new Date());
  return (
    <View style= {STYLES._row}>
        <View>
        <Text style = {[STYLES._titre, {fontSize: SIZES.h2}]}>{"Date début"}</Text>
            {/* Date de début */}
            <DatePicker
                date={dateDebut}
                onDateChange={setDateDebut}
                mode = "date"
                placeholder = "Ex: 19/01/2023"
                format = "DD/MM/YYYY"
                minDate = "01/01/2022"
                maxDate = "01/01/2122"
                confirmBtnText = "Valider"
                cancelBtnText = "Annuler"
                customStyles = {{
                    dateIcon: {
                        rigth: -5,
                        top: 2
                    },
                    dateInput: {
                        borderColor: COULEURS.jauneOr,
                        alignItems: 'center',
                        borderWidth: 1.5,
                        borderRadius: SIZES.radius
                    },
                    placeholderText: {
                        color: COULEURS.grisLeger,
                        fontSize: 15
                    },
                    dateText: {
                        fontSize: 15
                    }
                }}
            />
        </View>
        <View>
        <Text style = {[STYLES._titre, {fontSize: SIZES.h2}]}>{"Date fin"}</Text>
            {/* Date de fin */}
            <DatePicker
                mode = "date"
                placeholder = "Ex: 19/01/2023"
                format = "DD/MM/YYYY"
                minDate = "01/01/2022"
                maxDate = "01/01/2122"
                confirmBtnText = "Valider"
                cancelBtnText = "Annuler"
                customStyles = {{
                    dateIcon: {
                        rigth: -5,
                        top: 2
                    },
                    dateInput: {
                        borderColor: COULEURS.jauneOr,
                        alignItems: 'center',
                        borderWidth: 1.5,
                        borderRadius: SIZES.radius
                    },
                    placeholderText: {
                        color: COULEURS.grisLeger,
                        fontSize: 15
                    },
                    dateText: {
                        fontSize: 15
                    }
                }}
                date={dateFin}
                onDateChange={setDateFin}
        />
        </View>

    </View>
  )
}

export default Calendrier