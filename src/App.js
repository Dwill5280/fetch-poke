import React, {useState, } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

const requestPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
    return response.json();
}).then(response => {
    console.log(response);
    setPokemon(response.results);
}).catch(err=>{
    console.log(err);
});
  }
  
  return (
    <div className="App">
      <button onClick={requestPokemon}>Fetch Pokemon</button>
      <hr />
      {
        pokemon.map((pokemon, index) => (
          <h5>{pokemon.name}</h5>
        ))
      }
    

    </div>
  );
}

export default App;
