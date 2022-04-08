import React, { Component } from 'react';

class Form extends Component {
  render () {
    return (
      <form>
        <fieldset>
          <label>
            Nome
            <input
              name='nome' type='text' maxLength='40'
              style={{textTransform: 'uppercase'}}
              required />
          </label>
          <label>
            Email
            <input
              name='email' type='text' maxLength='50'
              required />
          </label>
          <label>
            CPF
            <input
              name='cpf' type='text' maxLength='11'
              required />
          </label>
          <label>
            Endereço
            <input
              name='address' type='text' maxLength='200'
              required />
          </label>
          <label>
            Cidade
            <input
              name='city' type='text' maxLength='28'
              required />
          </label>
          <label>
            Estado
            <select name="state" id="state" required>
              <option value="uf">UF</option>
            </select>
          </label>
          <label>
            Casa
            <input
              name='living' type='radio' value='Casa'
              required />
          </label>
          <label>
          Apartamento
            <input
              name='living' type='radio' value='Apartamento'
              required />
          </label>         
        </fieldset>
      </form>
    );

  }
}

export default Form;
