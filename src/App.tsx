import React from 'react';
import { useGetPokemonById } from './models/pokemon';

const App = () => {
  const { data: pokemons } = useGetPokemonById({ params: { id: 1 } });

  return (
    <div>
      <div>Hello PokeFederations (ui-model)</div>
      <br />
      {pokemons && <>I've fetched a pokemon for you: {pokemons.name}</>}
    </div>
  );
};

export default App;
