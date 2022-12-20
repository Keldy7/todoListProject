import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const STYLES = {
    _container: {
        width: '100%'
    },

    _centrerAligner: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    _titre: {
        color: COLORS.bluePale,
        fontFamily: FONTS.bold
    },

    _logo: {
        marginTop: 15,
        width: SIZES.largeur / 3,
        height: SIZES.longueur / 5
    },

    _btn: {
        padding: SIZES.spacing,
        width: SIZES.largeur / 1.25,
        height: 5 * SIZES.spacing,
        marginBottom: 3 * SIZES.spacing,
        borderRadius: SIZES.radius,
        justifyContent: 'center'
    },
};

export default STYLES;