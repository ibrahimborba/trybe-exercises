import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nameInput: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      stateInput: '',
      liveIn: false,
      curriculum: '',
      jobTitle: '',
      description: '',
    };

    handleChange({ target }) {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
    
      this.setState({
        [name]: value,
      });
    }
  }

  render () {
    return (
      <form>
        <fieldset className={styles.fieldset}>
          <label>
            Nome
            <input
              name='nameInput' type='text' maxLength='40'
              value={this.state.nameInput}
              onChange={this.handleChange}
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
            <select name="stateInput" id="state" required>
              <option value="uf">UF</option>
            </select>
          </label>
          <label>
            Casa
            <input
              name='liveIn' type='radio' value='Casa'
              required />
          </label>
          <label>
          Apartamento
            <input
              name='liveIn' type='radio' value='Apartamento'
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
