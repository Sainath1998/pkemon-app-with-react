import React,{useState, useEffect} from "react";
import PokemonList from "./PokemonList";
import axios from 'axios'

function App() {
  const [pokemon, setPokemon]=useState([]);
  const [currentPageUrl, setPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();


useEffect(()=>{
  axios.get(currentPageUrl).then((res)=>{
    setNextPage(res.data.next);
    setPrevPage(res.data.previous)
    setPokemon(res.data.results.map(p=>p.name))
  },[currentPageUrl])
})
 
  return (
    <PokemonList pokemon = {pokemon}></PokemonList>
  );
}

export default App;
