import { Component } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <li>
        <h2>{ pokemon.name }</h2>
        <p>{ pokemon.type }</p>
        <p>{ pokemon.averageWeight.value }{ pokemon.averageWeight.measurementUnit }</p>
        <img src={ pokemon.image } alt='specified pokemon'/>
      </li>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default Pokemon;
