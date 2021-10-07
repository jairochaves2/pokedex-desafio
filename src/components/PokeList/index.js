import React from "react";
import getPokemonsByPage from "../../functions/pokemons";
import PokeCard from "../PokeCard";

function PokeList() {
  const [offset, setOffset] = React.useState(0);
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    getPokemonsByPage().then((data) => {
      setOffset(data);
    });
  }, [page]);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {pokemons?.map((pokemon, index) => {
        return (
          <PokeCard
            key={index + 1}
            pokeIndex={pokemon.url.split("/")[6]}
            name={pokemon.name}
          />
        );
      })}
    </div>
  );
}

export default PokeList;
