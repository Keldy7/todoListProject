import { COULEURS, SIZES } from "../constants"
import { FONTS } from "../constants/fonts";

const STYLES = {
  _container: {
    width: "100%",
    backgroundColor: COULEURS.blancPale
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
    color: COULEURS.bluePale,
    fontWeight: "bold",
    ...FONTS.h1,
    lineHeight: 36
  },

  _msgErreur: {
    color: COULEURS.rouge,
    fontSize: SIZES.font,
    fontWeight: "bold",
    textAlign: 'center'
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
    backgroundColor: COULEURS.bluePale,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.spacing,
  },

  _formInput: {
    flexDirection: "row",
    marginTop: SIZES.spacing,
    paddingBottom: 5
  },

  _formInputTitre: {
    color: COULEURS.bluePale,
	  fontSize: SIZES.font,
	  fontWeight: "bold",
  },

  _formInputTexte: {
    flex: 1,
    padding: SIZES.spacing,
    color: COULEURS.noir,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: COULEURS.jauneOr,
    borderRadius: SIZES.radius,
    backgroundColor: COULEURS.blancCasse

  },

  _grid: {
    height: 125,
    backgroundColor: COULEURS.blanc,
    borderRadius: SIZES.spacing,
    margin: 4,
  },

  _gridDetails: {
    paddingHorizontal: 10,
    alignItems: "center",
  },

  _sectionDetailTache: {
    paddingTop: 0,
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
  },

  _item: {
    backgroundColor: COULEURS.grisClair,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  _itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  _itemText: {
    maxWidth: "80%",
  }
  
};

export default STYLES;
