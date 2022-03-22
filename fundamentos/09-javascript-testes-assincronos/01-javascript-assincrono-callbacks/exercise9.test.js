// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("./exercise8.js");

describe("A função getPokemonDetails", () => {
  const callback = (error, message) => {
    if (error) console.log(error);
    else console.log(message);
  }
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
    const expectError = new Error (new Error('Não temos esse pokémon para você :('), null);
    const callback = (error, result) => {
      expect(error).toEqual(expectError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasauro', callback);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    const expected = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    
    const callback = (error, result) => {
      expect(error).toBe(expected);
      done();
    }
  });

  getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
});