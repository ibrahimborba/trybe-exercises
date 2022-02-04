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

