import { FC } from "react";
import Header from "../components/Header";
import SortComponent from "../components/SortComponent";
import GridOption from "../components/GridOption";
import usePokemonList from "../hooks/usePokemonList";
import Card from "../components/Card";

const HomePage: FC = () => {
    const{ pokemonList,loading, error} = usePokemonList();
    if(error) return <div>DONT</div>
  return (
    <div className="max-h-screen overflow-y-scroll">
      <Header />
      <div className="px-[21px] my-4 flex justify-between">
        <SortComponent />
        {/* <GridOption /> */}
      </div>
      <div className="px-5 py-4 ">
        {loading ? (<div> loading </div>) : 
          (

              <div>
                  {pokemonList.map((pokemon , index) => <Card key ={index} name={pokemon.name}/>)}
               </div>   
          
          )
        }
      </div>
    </div>
  );
};

export default HomePage;
