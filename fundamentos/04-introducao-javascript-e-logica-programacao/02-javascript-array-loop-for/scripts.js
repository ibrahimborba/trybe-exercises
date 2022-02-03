let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* Percorre o aray imprimindo cada valor*/
for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}

/* Soma todos os valores dentro do array*/
let sum = 0;
for(let index = 0; index < numbers.length; index += 1){
  sum += numbers[index];
}
console.log(sum);
