import React from 'react';

const Squirtle = ({pokemonData, pokemonImg}) => {

  return(
    <div>
      <h1>POKEMON</h1>
      <h3>{pokemonData.name}</h3>
      <img src={pokemonImg} alt={pokemonData.name} />
      <p>El pokemon se llama {pokemonData.name}, mide {pokemonData.height} cm y pesa {pokemonData.weight} kg.</p>
    </div>
  )
}

export default Squirtle;