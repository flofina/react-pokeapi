import React, { useState, useEffect } from 'react';
import './styles/App.css';

import Charmander from './components/Charmander';
import Squirtle from './components/Squirtle';
import Bulbasaur from './components/Bulbasaur';
import Pikachu from './components/Pikachu';

const App = () => {

  const [page, setPage] = useState('');
  const [pokemon, setPokemon] = useState({});

  const handleClick = e => {
    setPage(e.target.id);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [page]);

  const paginacion = {
    charmander: <Charmander pokemonData={pokemon}/>,
    squirtle: <Squirtle pokemonData={pokemon} />,
    bulbasaur: <Bulbasaur pokemonData={pokemon} />,
    pikachu: <Pikachu pokemonData={pokemon} />
  }

  return (
    <div className="App">

      {
        paginacion[page]
      }

      {
        !page &&
        <main>
          <div>
          <h2>SELECCIONA TU POKEMON</h2>
          <img src={`https://www.ayayay.tv/wp-content/uploads/2016/02/portada-pokemon.jpg`} alt={'imagen de pokemon'} />
          </div>
        </main>
      }

      <nav>
        <button id='charmander' onClick={handleClick}>Charmander</button>
        <button id='squirtle' onClick={handleClick}>Squirtle</button>
        <button id='bulbasaur' onClick={handleClick}>Bulbasaur</button>
        <button id='pikachu' onClick={handleClick}>Pikachu</button>
      </nav>

    </div>
  )
}

export default App;