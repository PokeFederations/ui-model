import React from "react";
import { getPokemonById } from "./models/pokemon";


const App = () => {
  const { data: pokemon } = getPokemonById({ id: 1 });

  return (
    <div>
      <div>Hello PokeFederations (ui-model)</div>
      <br />
      I've fetched a pokemon for you: {pokemon?.name}
    </div>
  );
};

export default App;
