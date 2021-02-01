import React from "react";
import PokeCard from "../../components/PokeCard";
import { default as TypesMenu } from "../../components/Types";
import getPokemonsByPage from "../../functions/pokemons";
import "./styles.scss";

import Pokedexlogo from "../../assets/images/Pokédex_logo.png";
import PokeList from "../../components/PokeList";

export default function Home() {
  return (
    <div id="container-home">
      <header>
        <img src={Pokedexlogo} id="logo" />
      </header>

      <main>
        <TypesMenu />
        <PokeList />
      </main>
      <footer></footer>
    </div>
  );
}
