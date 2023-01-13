//Configuration de notre magasin
import { configureStore } from "@reduxjs/toolkit";
import tacheReducer from "./tachesReducer";
import tacheCourante from "./tacheCourante.reducer"

export const store = configureStore({
    reducer: {
        taches: tacheReducer,
        tacheCourante: tacheCourante
    },
});