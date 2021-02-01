import React from "react";

import "./style.scss";

function PokeCard() {
  return (
    <div className="pokecard">
      <div className="image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" />
      </div>
      <h2 className="name">PokeName</h2>
    </div>
  );
}

export default PokeCard;
