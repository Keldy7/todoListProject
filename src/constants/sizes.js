
import { Dimensions } from 'react-native';

const { largeur, longueur } = Dimensions.get('screen');
const SIZES = {
    //Tailles globales
    base: 8,
    font: 14,
    radius: 12,
    padding: 25,
    margin: 32,
    spacing: 10,

    //Tailles de la police
    
    titreLarge: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,

    largeur, longueur
};

export default SIZES;