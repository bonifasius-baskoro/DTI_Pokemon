import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/useSelector";
import { fetchPokemonListData } from "../features/pokemonlist";
import { listPokemonDetailSorted } from '../features/pokemonDetail';

interface Pokemon {
  name: string;
  url: string;
}

const usePokemonList = () => {
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<unknown>(null);
  const [sortField, setSortField] = useState<'name' | 'hp'>('hp');
  const dispatch=useAppDispatch();
  const {data:pokemonList, loading, error}= useAppSelector(state=>state.pokemonList)
  const sortedArray = useAppSelector(state => 
    listPokemonDetailSorted(state, { sortBy: sortField})
  );


  useEffect(() => {
     dispatch(fetchPokemonListData());
  }, [dispatch,]);

  useEffect(() => {
    console.log("Sorted array updated:");
  
  }, [sortedArray])

   const  updateSortField = (newSortField: 'name' | 'hp') => {
    setSortField(newSortField);
  };

  return { sortedArray, loading, error ,updateSortField};
};

export default usePokemonList;
