const read = require('readline-sync');

console.log('Calculadora de IMC');
const peso = read.questionFloat('Digite seu peso: ')
const altura = read.questionFloat('Digite sua altura: ')
const imc = (peso, altura) => peso / Math.pow(altura, 2);
const imcResult = imc(peso, altura).toFixed(1);

module.exports = {
  imcResult
};
