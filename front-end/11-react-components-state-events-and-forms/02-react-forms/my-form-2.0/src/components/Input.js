import React, { Component } from "react";

class Input extends Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length > 40) error = 'Máximo de 40 caracteres!'
    if (value.length <= 0) error = 'Preencimento obrigatório!'

    return (
      <label>
        Nome
        <input
          name='nameInput' type='text'
          value={value}
          onChange={handleChange}
          style={{textTransform: 'uppercase'}}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Input;
