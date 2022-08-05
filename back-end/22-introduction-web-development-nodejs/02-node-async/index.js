const fs = require('fs').promises;
const read = require('readline-sync');

const fileName = 'simpsons.json';

const readAllCharacters = async () => {
  try {
    const characters = await fs.readFile(fileName, 'utf8');
    const charactersList =  JSON.parse(characters);
    charactersList.forEach((character) => console.log(`${character.id} - ${character.name}`));
  } catch (err) {
    console.error(`Não foi possível ler o arquivo ${fileName}\n Erro: ${err}`);
    process.exit(1);
  }
}

const findCharacter = async () => {
  try {
    const characters = await fs.readFile(fileName, 'utf8');
    const charactersList =  JSON.parse(characters);
    const id = read.question('Qual o id do personagem? ');
    const charFound = charactersList.filter((character) => character.id === id);
    if (charFound.length === 0) {
      throw new Error('id não encontrado');
    }
    console.log(charFound[0]);
  } catch (error) {
    console.log(error.message);
  }
}

const saveCharacters = async () => {
  try {
    const characters = await fs.readFile(fileName, 'utf8');
    const charactersList =  JSON.parse(characters);
    const familyCharacters = charactersList.filter((character) => character.id <= 4 );
    const familyString = JSON.stringify(familyCharacters);
    await fs.writeFile('./simpsonFamily.json', familyString);
  } catch (error) {
    console.log(error.message);
  }
};

const main = async () => {
  await readAllCharacters();
  await findCharacter();
  await saveCharacters();
}

main();