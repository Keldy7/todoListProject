// Reducer pour les taches courantes
import { createSlice } from "@reduxjs/toolkit";

export const tacheCouranteSlice = createSlice({
    name: "tacheCourante",
    initialState: { tacheCourante: {} },
    reducers: {
        ajouterTacheCourante: (state, action) => {
            state.tacheCourante = action.payload;
        }
    }
});

export const { ajouterTacheCourante } = tacheCouranteSlice.actions;
export default tacheCouranteSlice.reducer;