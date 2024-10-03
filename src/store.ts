import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./features/grid";
import { pokemonListReducer } from "./features/pokemonlist";


export const store= configureStore({
    reducer:{
        grid: gridReducer,
        pokemonList:pokemonListReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;