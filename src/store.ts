import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./features/grid";
import { pokemonListReducer } from "./features/pokemonlist";
import { pokemonDetailListReducer } from "./features/pokemonDetail";


export const store= configureStore({
    reducer:{
        grid: gridReducer,
        pokemonList:pokemonListReducer,
        pokemonDetailList:pokemonDetailListReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
