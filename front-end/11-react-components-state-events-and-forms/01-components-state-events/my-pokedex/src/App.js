import './App.css';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <main className="App">
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <section>
        <Pokedex />
      </section>
    </main>
  );
}

export default App;
