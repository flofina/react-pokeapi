import React, { useState, useEffect } from 'react';
import './styles/App.css';

import Pokemon from './components/Pokemon';

const App = () => {

  const [page, setPage] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [imagen, setImagen] = useState({});


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [page]);

  const handleClick = e => {
    setPage((e.target.id));

    fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.id}`)
      .then(res => res.json())
      .then(data => setImagen(data.sprites.front_default))
  };

  const paginacion = {
    charmander: <Pokemon pokemonData={pokemon} pokemonImg={imagen} />,
    squirtle: <Pokemon pokemonData={pokemon} pokemonImg={imagen} />,
    bulbasaur: <Pokemon pokemonData={pokemon} pokemonImg={imagen} />,
    pikachu: <Pokemon pokemonData={pokemon} pokemonImg={imagen} />
  }

  return (
    <div className="App">

      {
        !page &&
        <main>
          <div>
            <h2>SELECCIONA TU POKEMON</h2>
            <img src={`https://www.ayayay.tv/wp-content/uploads/2016/02/portada-pokemon.jpg`} alt={'imagen de pokemon'} />
          </div>
        </main>
      }

      <div className="pokemon">

        {
          paginacion[page]
        }
      
      </div>

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