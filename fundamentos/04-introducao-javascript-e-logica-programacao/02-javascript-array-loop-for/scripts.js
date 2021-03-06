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

/*Média aritmética do array*/
let mean = 0;
let sumMean = 0;
for(let index = 0; index < numbers.length; index += 1){
  sumMean += numbers[index];
}
mean = sumMean/numbers.length;
console.log(mean);

/*Checa se a media é maior que 20*/
let meanCompare = 0;
for(let index = 0; index < numbers.length; index += 1){
  meanCompare += numbers[index];
}

if(meanCompare/numbers.length > 20){
  console.log('valor maior que 20');
}else{
  console.log('valor menor ou igual a 20');
}

/*Descobre o maior valor dentro do array*/
let largest = 0;
for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > largest){
    largest = numbers[index];
  }
}
console.log('o maior valor é ' + largest);

/*Conta valores impares*/
let isOdd = 0;
let oddCounter = 0;
for(let index = 0; index < numbers.length; index += 1){
  isOdd = numbers[index];
  if(isOdd % 2 !== 0){
    oddCounter += 1;
  }
}
if(oddCounter > 0){
  console.log('há ' + oddCounter + ' números ímpares');
}else{
  console.log('nenhum valor ímpar encontrado');
}

/*Descobre o menor valor dentro do array aproveitando o resultado do exercício de maior valor*/
let smallest = largest;
for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] < smallest){
    smallest = numbers[index];
  }
}
console.log('o menor valor é ' + smallest);

/*Cria um array que vai de 1 a 25*/
let array = [];
for (let increment = 1; increment <= 25; increment += 1){
  array.push(increment);
}
console.log(array);

/*Divide os elementos do array anterior por 2*/
let arrayDivide = [];
for(let index = 0; index < array.length; index += 1){
  arrayDivide.push(array[index]/2); 
}
console.log(arrayDivide);

/*Ordena em ordem crescente*/
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

/*Ordena em ordem decrescente*/
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

/*Multiplica um elemento do array pelo elemento seguinte*/
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplyByNext = [];
for(let index = 0; index < numbers.length-1; index += 1){
    multiplyByNext.push(numbers[index]*(numbers[index+1]));
}
multiplyByNext.push(numbers[numbers.length - 1]*2);
console.log(multiplyByNext);

