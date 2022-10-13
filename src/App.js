import React,{useState, useEffect} from "react";
import PokemonList from "./PokemonList";
import axios from 'axios'
// const [pokemon, setPokemon] = useState([])
//   const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
//   const [nextPageUrl, setNextPageUrl] = useState()
//   const [prevPageUrl, setPrevPageUrl] = useState()
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setLoading(true)
//     let cancel
//     axios.get(currentPageUrl, {
//       cancelToken: new axios.CancelToken(c => cancel = c)
//     }).then(res => {
//       setLoading(false)
//       setNextPageUrl(res.data.next)
//       setPrevPageUrl(res.data.previous)
//       setPokemon(res.data.results.map(p => p.name))
//     })





function App() {
  const [pokemon, setPokemon]=useState([]);
  const [currentPageUrl, setPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

      useEffect(()=>{
        // setLoading(true)
        axios.get(currentPageUrl).then(res=>{
          console.log(res)
          setLoading(false);    
          setNextPage(res.data.next);
          setPrevPage(res.data.previous)
          setPokemon(res.data.results.map(p=>p.name))
        },[currentPageUrl])
      })
 if(loading){
  return "loading..."
 }
  return (
    <PokemonList pokemon = {pokemon}></PokemonList>
  );
}

export default App;
