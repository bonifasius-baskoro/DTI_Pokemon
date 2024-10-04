import { FC } from "react";
import { useParams } from "react-router-dom";
import usePokemonDetailList from "../hooks/usePokemonDetailV2";
import Header from "../components/Header";

const PokeDetailPage: FC = () => {
  const { name = "" } = useParams();
  const { pokemonChosen } = usePokemonDetailList(name);
  if (!pokemonChosen?.name) {
    return <div>not found</div>;
  }
  return (
    <>
      <Header />
      <div className="bg-[#252A3E] py-16 h-full">
        <h1></h1>
        <div className="flex justify-center">
          <div className={`w-[300px]   `}>
            <img
              className=""
              src={pokemonChosen?.artworkFront}
              alt="pokemon_pic"
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-6">
          <h1 className="text-4xl text-white capitalize font-medium">
            {pokemonChosen.name}
          </h1>
          <div>
            <img src={pokemonChosen?.spriteFront} alt="pokemon_sprite" />
          </div>
        </div>
        <div className="bg-[#05091B] mx-6 ">
          <div >
            <h1 className="text-slate-500 text-2xl text-left mx-6 my-4"> Health</h1>
            <div className=" bg-[#3D4466] h-4 mx-6">
                <div className="rounded-full bg-green-400 h-full"
                style={{ width: `${pokemonChosen.health}%` }}></div>
            </div>
          </div>
          <div className="flex mt-6 px-6 justify-between">
            <div>
                <h1 className="text-2xl text-slate-500"> Attack</h1>
                <h1  className="text-3xl text-white text-left">{pokemonChosen.attack}</h1>
            </div>
            <div>
                <h1 className="text-2xl text-slate-500"> Defense</h1>
                <h1 className="text-3xl text-white text-left">{pokemonChosen.defense}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeDetailPage;
