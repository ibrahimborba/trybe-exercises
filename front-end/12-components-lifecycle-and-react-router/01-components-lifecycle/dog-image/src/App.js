import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogImage: undefined,
    };
  }

  fetchDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      this.setState({dogImage: data.message});
    })
    console.log(this.state.dogImage);
  }

  componentDidMount() {
    this.fetchDogs();
  }

  render() {
    const { dogImage } = this.state
    const loadingMessage = <span>Loading...</span>
    const randomDog = <img src={dogImage} alt='a random dog breed'/>
    return (
      <main className='App'>
        <section>
          { !dogImage ? loadingMessage : randomDog}
        </section>
        <button type='button' onClick={ this.fetchDogs }>New Dog!</button>
      </main>
    );
  }
}

export default App;
