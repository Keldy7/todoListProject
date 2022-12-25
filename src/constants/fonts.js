import { SIZES } from ".";

export const regular = "Roboto-Regular";
export const bold = "Roboto-Bold";
export const medium = "Roboto-Medium";


export const FONTS = {
    titreLarge: {
        fontFamily: bold,
        fontSize: SIZES.titreLarge
    },
    h1: {
        fontFamily: bold,
        fontSize: SIZES.h1,
        lineHeight: 36
    },
    h2: {
        fontFamily: bold,
        fontSize: SIZES.h2,
        lineHeight: 30
    },
    h3: {
        fontFamily: medium,
        fontSize: SIZES.h3,
        lineHeight: 22
    },
    h4: {
        fontFamily: medium,
        fontSize: SIZES.h4,
        lineHeight: 22
    },
    h5: {
        fontFamily: "Roboto-Regular",
        fontSize: SIZES.h5,
        lineHeight: 20
    },
};

const theme = { FONTS,regular,bold,medium};
export default theme;
