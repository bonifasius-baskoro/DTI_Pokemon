import React, { useEffect, FC } from "react";
import usePokemonDetails from "../hooks/usePokemonDetail";

interface CardProps {
  name: string;
}

const Card: FC<CardProps> = ({ name }) => {
  const { pokemonDetails } = usePokemonDetails(name);

  useEffect(() => {
    console.log(JSON.stringify(pokemonDetails));
  });
  return (
    <div className=" font-DM mx-2 w-min-[128px] w-max-[280px] h-min-[180px] h-max-[240px] bg-[#F0F3FF] rounded-md">
      <div className="px-3 pt-3 flex justify-between">
        <h1 className="text-green-500 text-base font-bold  capitalize">
          {pokemonDetails?.type}
        </h1>
        <h1>#{pokemonDetails?.id}</h1>
      </div>
      <div className="flex justify-center">
        <img
          className={` min-w-[90px] max-w-[178px] h-auto  object-fit `}
          src={pokemonDetails?.artworkFront}
        />
      </div>
      <div className=" capitalize font-bold mb-2">{pokemonDetails?.name}</div>
    </div>
  );
};

export default Card;
