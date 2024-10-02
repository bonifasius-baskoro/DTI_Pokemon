import { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const pokemonListStorage = window.localStorage.getItem("pokemonList")
    if (!pokemonListStorage ){
      setPokemonList(JSON.parse(pokemonListStorage) as Pokemon[])
    }
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon.');
        }
        const data = await response.json();
        console.log(data);
        window.localStorage.setItem("pokemonList",JSON.stringify(data.results))
        setPokemonList(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  return { pokemonList, loading, error };
};

export default usePokemonList;
