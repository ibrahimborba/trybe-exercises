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