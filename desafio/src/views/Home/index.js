import React from "react";
import PokeCard from "../../components/PokeCard";
import { default as TypesMenu } from "../../components/Types";
import getPokemonsByPage from "../../functions/pokemons";
import "./styles.scss";

import Pokedexlogo from "../../assets/images/logo.png";

export default function Home() {
  return (
    <div id="container-home">
      <header>
        <a href="#" id="logo">
          <img src={Pokedexlogo} alt="Logo Pokédex" />
          <span id="version">v1.0.0</span>
        </a>

        <h3 id="legend">An index of Pokémon built as a client-side ReactJS webapp.</h3>
      </header>

      <main>
        {console.log(getPokemonsByPage())}
        <TypesMenu />
        <PokeCard />
      </main>
      <footer></footer>
    </div>
  );
}
