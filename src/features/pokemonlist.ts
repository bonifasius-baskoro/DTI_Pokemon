import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


const loadState = (): pokemonNameList => {
    try {
      const serializedState = localStorage.getItem("pokemonListCache");
      if (serializedState === null) {
        return { data: [], loading: false, error: false };
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return { data: [], loading: false, error: false };
    }
  };
  
  const initialState: pokemonNameList = loadState();



const fetchPokemonListData = createAsyncThunk(
    'pokemonListSlice/fetchData',
    async () => {
        if(initialState.data.length>0){
            return initialState.data;
        }
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon.');
      }
      const data = await response.json();

      
    //   console.log(data.results)
      return data.results as pokemonName[] ;
    }
  );


const pokemonListSlice= createSlice({
    name:"pokemonlist",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchPokemonListData.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchPokemonListData.fulfilled,(state, action:PayloadAction<pokemonNameList>)=>{
            state.loading=false;
            state.error=false;
            state.data=action.payload ;

            localStorage.setItem("pokemonListCache",JSON.stringify(state))
        })
        .addCase(fetchPokemonListData.rejected,(state)=>{
            state.error = true;
        })
    }


})

export const pokemonListReducer = pokemonListSlice.reducer;
export { fetchPokemonListData };