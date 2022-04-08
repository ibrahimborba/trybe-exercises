import './App.css';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <body className="App">
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <section>
        <Pokedex />;
      </section>
    </body>
  );
}

export default App;
