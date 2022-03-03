
// PARTE 1
// Requisito 1 - o seu comportamento respeita o escopo no qual cada variável foi declarada
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(false);

// Requisito 2 - retorna o array oddsAndEvens em ordem crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const numbersAscending = oddsAndEvens.sort((a, b) => {return a - b});

console.log(`Os números ${numbersAscending} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// PARTE 2
// Requisito 1 - recebe um número e retorna seu fatorial 
const calcFactorial = (number) => {
  let factorial = number - 1;
  return factorial < 1 ? `1` : `${number *= calcFactorial(factorial)}`;
}
console.log(calcFactorial(6));
