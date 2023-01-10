import { createSlice } from "@reduxjs/toolkit";

export const tacheSlice = createSlice({
    name: "taches",
    initialState: {taches: []},
    reducers: {

        ajouterTache: (state, action) => {
            state.taches.push(action.payload)
        },
        cacherCompleteTache: (state) => {
            state.taches = state.taches.filter(
                tache => !tache.statut
                )
        },
        modifierTache: (state) => {
            state.taches = state.taches.map(tache => {
                if (tache.id === action.payload.id) {
                    state.taches = action.payload;
                    console.log(state.taches)
                }
                return tache;
            })
        },
        supprimerTache: (state, action) => {
            state.taches = state.taches.filter(
                tache => tache.id !== action.payload
            )
        },
        detaillerTache: (state, action) => {
            return state.taches.find((tache) => tache.id === action.payload);
          },
    },
});

export const { 
    ajouterTache, 
    cacherCompleteTache, 
    modifierTache, 
    supprimerTache,
    detaillerTache
} = tacheSlice.actions;

export default tacheSlice.reducer;
    