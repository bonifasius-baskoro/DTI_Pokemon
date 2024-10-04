import  { FC } from 'react'
import { useParams } from 'react-router-dom'
import usePokemonDetailList from '../hooks/usePokemonDetailV2';
import Header from '../components/Header';

const PokeDetailPage:FC = () => {
    const{name=""}= useParams();
    const { pokemonChosen } = usePokemonDetailList(name);
    if (!pokemonChosen?.name) {
        return <div>not found</div>
    }
  return (
    <>
    <Header/>
    <div>PokeDetailPage</div>
    <h1>{pokemonChosen.name}</h1>
    </>
  )
}

export default PokeDetailPage