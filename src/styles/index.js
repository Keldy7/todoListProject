
import { Platform } from "react-native";
import { COLORS, SIZES } from "../constants"
import { FONTS } from "../constants/fonts";

const STYLES = {
  _container: {
    width: "100%",
    backgroundColor: COLORS.blancPale
  },

  _centrerAligner: {
    alignItems: "center",
    justifyContent: "center",
  },

  _row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  _titre: {
    color: COLORS.bluePale,
    fontWeight: "bold",
    ...FONTS.h1,
    lineHeight: 36
  },

  _logo: {
    marginTop: 15,
    width: SIZES.largeur / 3,
    height: SIZES.longueur / 5,
  },

  _navBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: SIZES.base,
	
  },

  _bgIcon: {
    width: 55,
    height: 55,
    borderRadius: SIZES.radius * 2.5,
  },

  _btn: {
    padding: 2 * SIZES.spacing,
    flexDirection: "row",
    paddingHorizontal: SIZES.spacing,
    backgroundColor: COLORS.bluePale,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.spacing,
  },

  _formInput: {
    flexDirection: "row",
    marginTop: SIZES.spacing,
    paddingBottom: 5
  },

  _formInputTitre: {
    color: COLORS.bluePale,
	  fontSize: SIZES.font,
	  fontWeight: "bold",
  },

  _formInputTexte: {
    flex: 1,
    padding: SIZES.spacing,
    color: COLORS.noir,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: COLORS.jauneOr,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blancCasse

  },

  _grid: {
    height: 125,
    backgroundColor: COLORS.blanc,
    borderRadius: 10,
    margin: 4,
  },

  _gridDetails: {
    paddingHorizontal: 10,
    alignItems: "center",
  },

  _sectionDetailTache: {
    paddingTop: SIZES.spacing,
    paddingBottom: SIZES.spacing
  },

  _demiSectionDetailTache: {
    flexDirection: "row",
    alignItems: 'center',
    paddingTop: SIZES.base
  },

  _labelDetailTache: {
    paddingLeft: SIZES.padding / 2,
    ...FONTS.h3
  },

  _dispoWrap: {
    flexDirection:'row',
    flexWrap: "wrap",
    gap: '1rem',
  }
};

export default STYLES;
