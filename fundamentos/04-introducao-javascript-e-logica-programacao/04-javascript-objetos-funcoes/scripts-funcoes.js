// Checa se uma palavra é um palíndromo
function checkPalindrome(word) {
  let wordInverse = '';
  for(let i = word.length - 1; i >= 0; i -= 1){
    wordInverse += word[i];
  }
  if(word === wordInverse){
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome ('desenvolvimento'));

//Retorna o índice do maior valor de um array
function indexOfBiggest (array) {
  let biggest = 0;
  for (let i in array){
    if (array[i] > biggest){
      biggest = array[i];
    }
  }
  return array.indexOf(biggest);
}

let array = [2, 3, 6, 7, 10, 1];
console.log(indexOfBiggest(array));

//Retorna o índice do menor valor de um array
function indexOfSmallest(array) {
  let smallest = array[0];
  for (let i in array){
    if (array[i] < smallest){
      smallest = array[i];
    }
  }
  return array.indexOf(smallest);
}

let array = [2, 4, 6, 7, 10, 0, -3];
console.log(indexOfSmallest(array));

//Retorna o nome com a maior quantidade de caracteres
function mostChars(array) {
  let biggest = array[0];
  for(let i in array){
    if(array[i].length > biggest.length){
      biggest = array[i];
    }
  }
  return biggest;
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(mostChars(names));

//Retorna o número que mais se repete
function mostRepeats(array) {
  let counter = 0;
  let biggestCounter = 0;
  for(let i = 0; i < array.length; i += 1){
    for(let j = 0; j < array.length; j += 1){
      if(array[i] === array[j]){
        counter += 1;
      }
    }
    if(counter > biggestCounter){
      biggestCounter = counter;
      return array[i];
    }
  }
}

let array = [2, 3, 2, 5, 8, 2, 3];
console.log(mostRepeats(array));

//Retorna a somatoria de 1 a 'n'
function summation(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1){
    sum += i;
  }
  return sum;
}

console.log(summation(5));

//Verifica se uma string é o final de outra
function checkWordEnding(word, ending){
  if(word.slice(- ending.length) === ending){
    return true;
  }else{
    return false;
  }  
}

console.log(checkWordEnding('joaofernando', 'fernan'));


