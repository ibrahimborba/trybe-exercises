// Retorna fatorial de 10
let factorial = 1;
for (let counter = 1; counter <= 10; counter += 1){
  factorial *= counter;
}
console.log(factorial);

// Inverte uma palavra
let word = 'banana';
let wordInverse = '';
for (let i = word.length-1; i >= 0; i -= 1) {
  wordInverse += word[i];
}
console.log('O inverso da palavra ' + word + " é " + wordInverse);

// Retorna maior e menor palavras dentro do array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let arrayCount = [];
for (let i = 0; i < array.length; i += 1){
  let charCounter = 0;
  for (let j = 0; j < array[i].length; j += 1) {
    charCounter += 1;
  }
  arrayCount.push(charCounter);
}

let largest = 0;
let smallest = 100;
for (let i = 0; i < arrayCount.length; i += 1){
  if(arrayCount[i] > largest){
    largest = arrayCount[i];
  }else if(arrayCount[i] < smallest){
    smallest = arrayCount[i];
  }
}

console.log('A maior palavra é ' + array[arrayCount.indexOf(largest)] + ' e a menor palavra é ' + array[arrayCount.indexOf(smallest)]);