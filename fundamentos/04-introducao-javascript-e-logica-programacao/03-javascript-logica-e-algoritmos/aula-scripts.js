// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:
let sum = 0;
for (let counter = 1; counter <= 50; counter += 1){
  sum += counter;
}
console.log(sum);

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let counter = 0;
for (let i = 2; i <= 150; i += 1){
  if(i % 3 === 0){
    counter += 1;
  }
}
if(counter === 50){
  console.log('mensagem secreta');
}else{
  console.log(counter);
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
let jogadas= ["pedra","papel","tesoura"];
let playerOne = jogadas[Math.floor(Math.random() * jogadas.length)];
let playerTwo = jogadas[Math.floor(Math.random() * jogadas.length)];

if ((playerOne === 'pedra' && playerTwo === 'tesoura') || (playerOne === 'papel' && playerTwo === 'pedra') || (playerOne === 'tesoura' && playerTwo === 'papel')){
  console.log('Player 1 won');
}else if (playerOne === playerTwo){
  console.log('A Ties');
}else{
  console.log('Player 2 won');
}

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
// let age = 18;
// age >= 18 ? console.log('A pessoa é maior de idade') : console.log('A pessoa é menor de idade');
let idadePessoa = Math.floor(Math.random() * 110);
let maiorIdade = idadePessoa >= 18? "A pessoa é maior de idade." : "A pessoa é menor de idade.";
console.log(maiorIdade); 

// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let names = ['Carolzita', 'Murilo', 'Baêta'];
let ages = [10, 40, 40];
let youngest = ages[0];

for (let i = 0; i < ages.length; i +=1){
  if(ages[i] < youngest){
    youngest = ages[i];
  }
}

if (names[ages.indexOf(youngest)] === 'Murilo'){
  console.log(names[ages.indexOf(youngest)] + ' é o mais novo');
} else {
  console.log(names[ages.indexOf(youngest)] + ' é a mais nova');
}
