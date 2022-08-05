const {imcResult} = require('./imc');

const main = () => {
  switch (true) {
    case imcResult < 18.5:
      console.table([{'IMC': imcResult, 'Situação': 'Abaixo do peso (magreza)'}]);
      break;
    case imcResult <= 29.9:
      console.table([{'IMC': imcResult, 'Situação': 'Peso normal'}]);
      break;
    case imcResult <= 34.9:
      console.table([{'IMC': imcResult, 'Situação': 'Obesidade grau I'}]);
      break;
    case imcResult <= 39.9:
      console.table([{'IMC': imcResult, 'Situação': 'Obesidade grau II'}]);
      break;
    default:
      console.table([{'IMC': imcResult, 'Situação': 'Obesidade grau III e IV'}]);
      break;
  }
}

main();
