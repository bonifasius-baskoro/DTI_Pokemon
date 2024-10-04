import {
  createAsyncThunk,
  
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import {createSelector} from "reselect"

const loadState = (): pokemonNameDetailList => {
  try {
    const serializedState = localStorage.getItem("pokemonListDetailCache");
    if (serializedState === null) {
      return { data: [], loading: false, error: false };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { data: [], loading: false, error: false };
  }
};

const initialState: pokemonNameDetailList = loadState();

const fetchPokemonDetailListData = createAsyncThunk(
  "pokemonListSlice/fetchDataDetail",
  async () => {
    if (initialState.data.length > 0) {
      return initialState.data;
    }
    const pokemonDetailData: pokemonNameDetail[] = [];
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon.");
    }
    const data = await response.json();
    for (let i = 0; i < data.results.length; i++) {
      const pokemonName: string = data.results[i].name;
      const responseDetail = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (responseDetail.status != 200) {
        throw new Error("Failed to fetch Pokémon.");
        console.log("error)");
      }
      const dataDetail = responseDetail.data;
      const spriteFront = dataDetail.sprites.front_default;
      const artworkFront =
        dataDetail.sprites.other["official-artwork"].front_default;
      const { name, id } = dataDetail;
      const health = dataDetail.stats.find(
        (stat: any) => stat.stat.name === "hp"
      ).base_stat;
      const attack = dataDetail.stats.find(
        (stat: any) => stat.stat.name === "attack"
      ).base_stat;
      const defense = dataDetail.stats.find(
        (stat: any) => stat.stat.name === "defense"
      ).base_stat;
      const type = dataDetail.types[0].type.name;

      const pokemonNameDetailTemp: pokemonNameDetail = {
        name: name,
        id: id,
        health: health,
        attack: attack,
        defense: defense,
        spriteFront: spriteFront,
        artworkFront: artworkFront,
        type: type,
      };
      pokemonDetailData.push(pokemonNameDetailTemp);
    }

    //   console.log(data.results)
    return pokemonDetailData;
  }
);

const pokemonDetailListSlice = createSlice({
  name: "pokemonListDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetailListData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPokemonDetailListData.fulfilled,
        (state, action: PayloadAction<pokemonNameDetailList>) => {
          state.loading = false;
          state.error = false;
          state.data = action.payload;
          localStorage.setItem("pokemonListDetailCache", JSON.stringify(state));
        }
      )
      .addCase(fetchPokemonDetailListData.rejected, (state) => {
        state.error = true;
      });
  },
});

const pokemonData = (state: RootState) => state.pokemonDetailList.data;
const pokemonSort = (_state: RootState, props: { sortBy: "name" | "hp" }) =>
  props.sortBy;
export const listPokemonDetailSorted = createSelector(
  [pokemonData, pokemonSort],
  (pokemonArray: pokemonNameDetail[], pokemonSort: "name" | "hp") => {
      return [...pokemonArray].sort((a, b) => {
        if(pokemonSort === "name"){
            return a.name.localeCompare(b.name);
        }
        else{
            return a.health-b.health;
        }
    })
  }
);

export const pokemonDetailListReducer = pokemonDetailListSlice.reducer;
export { fetchPokemonDetailListData };
