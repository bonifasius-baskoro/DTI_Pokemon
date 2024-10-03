import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/useSelector";
import { fetchPokemonListData } from "../features/pokemonlist";

interface Pokemon {
  name: string;
  url: string;
}

const usePokemonList = () => {
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<unknown>(null);
  const dispatch=useAppDispatch();
  const {data:pokemonList, loading, error}= useAppSelector(state=>state.pokemonList)

  useEffect(() => {
     dispatch(fetchPokemonListData());
  }, [dispatch]);

  return { pokemonList, loading, error };
};

export default usePokemonList;
