
import { COLORS, SIZES } from "../constants"

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
    padding: SIZES.spacing,
    color: COLORS.bluePale,
    fontWeight: "bold"
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
	backgroundColor: COLORS.blancCasse,
	borderRadius: 5,
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

  }
};

export default STYLES;
