import {  useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/useSelector";
import { fetchPokemonDetailListData } from "../features/pokemonDetail";



const usePokemonDetailList = (name:string) => {
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<unknown>(null);
  const dispatch=useAppDispatch();
  const {data, loading, error}= useAppSelector(state=>state.pokemonDetailList);

  useEffect(() => {
     dispatch(fetchPokemonDetailListData());
    //  console.log(JSON.stringify(data))
  }, [dispatch]);
  const pokemonChosen : pokemonNameDetail | undefined = data.find(pokemon=>pokemon.name===name)
  return {  pokemonChosen, loading, error };
};

export default usePokemonDetailList;
