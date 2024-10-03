import {
    createSlice
} from "@reduxjs/toolkit";



const initialState:string = "single";

const gridSlice = createSlice(
    {
        name : "gridOption",
        initialState,
        reducers:{
            toogleGrid :(state)=> state === "single" ? "double" : "single"

        }
    }
);


export const{toogleGrid} = gridSlice.actions;
export default gridSlice.reducer;