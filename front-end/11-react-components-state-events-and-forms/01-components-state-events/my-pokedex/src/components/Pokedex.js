import { Component } from "react";
import pokemons from '../data';
import Pokemon from "./Pokemon";
import './Pokedex.css';

class Pokedex extends Component {
  constructor() {
		super()
		this.clickFoward = this.clickFoward.bind(this)
		this.clickBackwards = this.clickBackwards.bind(this)
		this.state = {
			pokemonIndex: 0,
		}
	}

	clickFoward() {
		this.state.pokemonIndex < pokemons.length - 1 ?
			this.setState((previousState, _props) => ({
				pokemonIndex: previousState.pokemonIndex + 1
			})) :
			this.setState({
				pokemonIndex: 0,
			});
	}

	clickBackwards() {
		this.state.pokemonIndex > 0 ?
			this.setState((previousState, _props) => ({
				pokemonIndex: previousState.pokemonIndex - 1
			})) :
			this.setState({
				pokemonIndex: pokemons.length - 1,
			});
	}

  render() {
    return (
      <section>
        <ul className="pokemon-list">
        <Pokemon key = {pokemons[this.state.pokemonIndex].id} pokemon = { pokemons[this.state.pokemonIndex] } />
        </ul>
        <button onClick={this.clickBackwards}>{'<'}</button>
        <button onClick={this.clickFoward}>{'>'}</button>
      </section>
      
    )
  }
}

export default Pokedex;
