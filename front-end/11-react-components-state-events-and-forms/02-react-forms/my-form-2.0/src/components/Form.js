import React, { Component } from 'react';
import styles from './Form.module.css';
import NameInput from './NameInput';

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

  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render () {
    return (
      <form>
        <fieldset className={styles.fieldset}>
          <NameInput value={this.state.nameInput} handleChange={this.handleChange}/>
          <label>
            Email
            <input
              name='email' type='text' maxLength='50'
              value={this.state.email}
              onChange={this.handleChange}
              required />
          </label>
          <label>
            CPF
            <input
              name='cpf' type='text' maxLength='11'
              value={this.state.cpf}
              onChange={this.handleChange}
              required />
          </label>
          <label>
            Endereço
            <input
              name='address' type='text' maxLength='200'
              value={this.state.address}
              onChange={this.handleChange}
              required />
          </label>
          <label>
            Cidade
            <input
              name='city' type='text' maxLength='28'
              value={this.state.city}
              onChange={this.handleChange}
              required />
          </label>
          <label>
            Estado
            <select
              name="stateInput" id="state"
              value={this.state.stateInput}
              onChange={this.handleChange}
              required>
              <option value="uf">UF</option>
            </select>
          </label>
          <label>
            Casa
            <input
              name='house' type='radio' value='Casa'
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
            <textarea
              name='curriculum' maxLength='1000'
              value={this.state.curriculum}
              onChange={this.handleChange}
              required />
          </label>
          <label>
            Cargo
            <textarea
            name='jobTitle' maxLength='40'
            value={this.state.jobTitle}
            onChange={this.handleChange}
            required />
          </label>
          <label>
            Descrição do cargo
            <textarea
            name='description' maxLength='500'
            value={this.state.description}
            onChange={this.handleChange}
            required />
          </label>
        </fieldset>
      </form>
    );

  }
}

export default Form;
