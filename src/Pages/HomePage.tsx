import { FC, FormEvent, useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import SortComponent from "../components/SortComponent";
import GridOption from "../components/GridOption";
import usePokemonList from "../hooks/usePokemonList";
import Card from "../components/Card";
import { useAppSelector } from "../hooks/useSelector";

const HomePage: FC = () => {
  const {
    sortedArray,
    loading,
    error,
    updateSortField
  } = usePokemonList();
  const [searchField, setSearchField] = useState<string>("");
  // useEffect(() => {
  //   updateSearchField(searchField);
  // }, [searchField]);
  const searchFunction= (searchString:string, arraySearch : pokemonNameDetail[])=>{
    return arraySearch.filter(pokemon=> pokemon["name"].includes(searchString))
  }
  const searchedArray:pokemonNameDetail[] = useMemo(()=>
    searchFunction(searchField, sortedArray) 
  ,[searchField]);
  

  const activeView = useAppSelector((state) => state.grid);
  if (error) return <div>DONT</div>;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchField);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };
  return (
    <div className="max-h-screen overflow-y-scroll">
      <Header />
      <div className="px-[21px] my-4 flex justify-between">
        <SortComponent updateSortField={updateSortField} />
        <GridOption />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchField}
            onChange={handleSearchChange}
            placeholder="Search Pokémon"
            className="mr-2 px-2 py-1 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-1 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </form>
      </div>
      <div className={`px-5 py-4 `}>
        {loading ? (
          <div className="text-5xl text-pink-50"> loading </div>
        ) : (
          <div
            className={`${
              activeView === "single" ? "" : "grid grid-cols-2"
            } gap-4 
              `}
          >
            {searchField && searchedArray
              ? searchedArray.map((pokemon, index) => (
                  <Card key={index} name={pokemon.name} />
                ))
              : sortedArray.map((pokemon, index) => (
                  <Card key={index} name={pokemon.name} />
                ))}
            {/* { sortedArray.map((pokemon, index) => (
                  <Card key={index} name={pokemon.name} />
                ))} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
