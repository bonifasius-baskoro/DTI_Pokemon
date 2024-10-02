import './App.css'
import {
  Route,
  Routes
} from "react-router-dom";
// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'
import HomePage from "./Pages/HomePage"

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    
      // {/* Start the development here */}
      // {/* Use react-router-dom Expected routes:  */}
      // {/* 1. Home path: "/" */}
      // {/* 1. Details path: "/details:" */}
      <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      </>
   
  )
}

export default App
