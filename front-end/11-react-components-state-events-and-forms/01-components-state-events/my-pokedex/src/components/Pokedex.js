import React, { Component } from "react";
import Pokemon from "./Pokemon";
import FilterButton from "./FilterButton";
import pokemons from '../data';
import './Pokedex.css';

class Pokedex extends Component {
  constructor() {
		super()
		this.filterByType = this.filterByType.bind(this)
		this.types = this.types.bind(this)
		this.clickFilter = this.clickFilter.bind(this)
		this.clickFoward = this.clickFoward.bind(this)
		this.clickBackwards = this.clickBackwards.bind(this)
		this.state = {
			pokemonIndex: 0,
      filter: 'All',
		}
	}
  
  filterByType() {
    return this.state.filter === 'All' ? pokemons : pokemons.filter((pokemon) => pokemon.type === this.state.filter);
  }

  types() {
    const allTypes = pokemons.map(pokemon => pokemon.type);
    return allTypes.filter((type, index) => allTypes.indexOf(type) === index);
  }

  clickFilter({target}) {
    this.setState({
      filter: target.value,
    })
  }

	clickFoward() {
		this.state.pokemonIndex < this.filterByType().length - 1 ?
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
				pokemonIndex: this.filterByType().length - 1,
			});
	}


  render() {
    const pokemonFilter = this.filterByType();
    const filterTypes = this.types();

    return (
      <section>
        <ul className="pokemon-list">
          <Pokemon key = {pokemonFilter[this.state.pokemonIndex].id} pokemon = { pokemonFilter[this.state.pokemonIndex] } />
        </ul>
        <section>
          <button onClick={this.clickFilter} value='All'>All</button>
          {filterTypes.map(type => <FilterButton type={type} clickEvent={this.clickFilter} />)}
        </section>
        <button onClick={this.clickBackwards}>{'<'}</button>
        <button onClick={this.clickFoward}>{'>'}</button>
      </section>
    )
  }
}

export default Pokedex;
