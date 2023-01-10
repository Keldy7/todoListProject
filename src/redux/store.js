//Configuration de notre magasin
import { configureStore } from "@reduxjs/toolkit";
import tacheReducer from "./taches";

export const store = configureStore({
    reducer: {
        taches: tacheReducer,
    },
});