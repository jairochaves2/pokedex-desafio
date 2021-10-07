import React from "react";

import "./style.scss";

function PokeCard({ pokeIndex, name }) {
  return (
    <div className="pokecard">
      <div className="image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeIndex}.png`}
          alt="Imagem do Pokemon"
        />
      </div>
      <h2 className="name">{name}</h2>
    </div>
  );
}

export default PokeCard;
