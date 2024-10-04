import React, { useEffect, FC } from "react";

import usePokemonDetailList from "../hooks/usePokemonDetailV2";

interface CardProps {
  name: string;
  health:number;
}

const Card: FC<CardProps> = ({ name}) => {
  const { pokemonChosen } = usePokemonDetailList(name);

  useEffect(() => {
    // console.log(JSON.stringify(pokemonChosen));
  });
  return (
    <a href={`/detail/${pokemonChosen?.name}`}>

    <div className=" font-DM mx-2 w-min-[128px] w-max-[280px] h-min-[180px] h-max-[240px] bg-[#F0F3FF] rounded-md">
      <div className="px-3 pt-3 flex justify-between">
        <h1 className="text-green-500 text-base font-bold  capitalize">
          {pokemonChosen?.type}
        </h1>
        <h1>#{pokemonChosen?.id}</h1>
        <h1 className="text-red-400">{pokemonChosen?.health}</h1>
      </div>
      <div className="flex justify-center">
        <img
          className={` min-w-[90px] max-w-[178px] h-auto  object-fit `}
          src={pokemonChosen?.artworkFront}
        />
      </div>
      <div className=" capitalize font-bold mb-2">{pokemonChosen?.name}</div>
    </div>
    </a>
  );
};

export default Card;
