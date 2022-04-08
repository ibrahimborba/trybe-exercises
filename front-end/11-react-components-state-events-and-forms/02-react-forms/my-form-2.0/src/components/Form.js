import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
  render () {
    return (
      <form>
        <fieldset className={styles.fieldset}>
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

        <fieldset className={styles.fieldset}>
          <label>
            Resumo do currículo
            <textarea name='curriculum' maxLength='1000' required />
          </label>
          <label>
            Cargo
            <textarea name='jobTitle' maxLength='40' required />
          </label>
          <label>
            Descrição do cargo
            <textarea name='description' maxLength='500' required />
          </label>
        </fieldset>
      </form>
    );

  }
}

export default Form;
