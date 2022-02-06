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

//Retorna o índice do maior valor d eum array
function indexOfBiggest (array) {
  let biggest = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] > biggest){
      biggest = array[i];
    }
  }
  return array.indexOf(biggest);
}

let array = [2, 3, 6, 7, 10, 1];
console.log(indexOfBiggest(array));