import { createSlice } from "@reduxjs/toolkit";

export const tacheSlice = createSlice({
  name: "taches",
  initialState: { taches: [] },
  reducers: {
    
    //Reducer d'ajout
    ajouterTache: (state, action) => {
      state.taches.push(action.payload);
    },

    //Reducer de modification
    modifierTache: (state) => {
      state.taches = state.taches.map((tache) => {
        if (tache.id === action.payload.id) {
          state.taches = action.payload;
          console.log(state.taches);
        }
        return tache;
      });
    },

    //Reducer de suppression
    supprimerTache: (state, action) => {
      state.taches = state.taches.filter(
        (tache) => tache.id !== action.payload
      );
    }
  },
});

export const {
  ajouterTache,
  modifierTache,
  supprimerTache,
} = tacheSlice.actions;

export default tacheSlice.reducer;
