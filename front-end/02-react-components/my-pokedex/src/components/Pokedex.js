import { Component } from "react";
import pokemons from '../data';
import Pokemon from "./Pokemon";
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <ul className="pokemon-list">
        {pokemons.map((elem) => {
          return <Pokemon pokemon = { elem } />;
        })}
      </ul>
    )
  }
}

export default Pokedex;
