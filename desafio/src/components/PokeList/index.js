import React from "react";
import getPokemonsByPage from "../../functions/pokemons";
import PokeCard from "../PokeCard";

function PokeList() {
  const [page, setPages] = React.useState(0);
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    getPokemonsByPage().then((data) => {
      setPokemons(data);
    });
  }, [page]);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {pokemons.map((pokemon, index) => {
        return (
          <PokeCard key={index + 1} pokeIndex={index + 1} name={pokemon.name} />
        );
      })}
    </div>
  );
}

export default PokeList;
