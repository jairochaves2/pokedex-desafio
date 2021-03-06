import React from "react";
import { default as TypesMenu } from "../../components/Types";
import "./styles.scss";

import PokeList from "../../components/PokeList";
import Pokedexlogo from "../../assets/images/logo.png";

export default function Home() {
  return (
    <div id="container-home">
      <header>
        <a href="#" id="logo">
          <img src={Pokedexlogo} alt="Logo Pokédex" />
          <span id="version">v1.0.0</span>
        </a>

        <h3 id="legend">
          An index of Pokémon built as a client-side ReactJS webapp.
        </h3>
      </header>

      <main>
        <TypesMenu />
        <PokeList />
      </main>
      <footer></footer>
    </div>
  );
}
