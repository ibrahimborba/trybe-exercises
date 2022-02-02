// Faz operações aritméticas básicas
const a = 2;
const b = 5;

let sum = a + b;
let subtract = a - b;
let multiply = a * b;
let divide = a / b;
let modulus = a % b;

console.log (sum, subtract, multiply, divide, modulus);

// Retorna o maior de dois números
const x = 5;
const y = 7;

if(x > y){
  console.log ("x é maior que y");
}
else if(y > x){
  console.log ("y é maior que x");
}
else{
  console.log("x e y são iguais");
}

// Retorna o maior de três números
const numX = 5;
const numY = 5;
const numZ = 9;

if(numX > numY && numX > numZ){
  console.log("numX é o maior número");
}
else if(numY > numX && numY > numZ){
  console.log("numY é o maior número");
}
else if(numZ > numX && numZ > numY){
  console.log("numZ é o maior número");
}
else {
  console.log("Há dois números iguais que são os maiores");
}

// Retorna o sinal de um número (positivo, negativo, zero)
const checkSignal = 0;

if(checkSignal > 0){
  console.log("positive");
}
else if(checkSignal < 0){
  console.log("negative");
}
else if(checkSignal === 0){
  console.log("zero");
}

// Checa se os ângulos são de um triângulo
const angleX = 60;
const angleY = "50";
const angleZ = 60;

if (angleX <= 0 || angleY <= 0 || angleZ <= 0 || typeof angleX !== "number" || typeof angleY !== "number" || typeof angleZ !== "number"){
  console.log("invalid angle");
}
else if (angleX + angleY + angleZ !== 180){
  console.log(false);
}
else if (angleX + angleY + angleZ === 180){
  console.log(true);
}

// Retorna o nome de uma peça de xadrez e os movimentos que ela faz
const pieceName = "Knigth";
switch (pieceName.toLowerCase()) {
  case "pawn":
    console.log("forward");
    break;

  case "knight":
    console.log("L shape");
    break;

  case "bishop":
    console.log("diagonally");
    break;

  case "rook":
    console.log("horizontally or vertically");
    break;

  case "queen":
    console.log("any direction");
    break;

  case "king":
    console.log("one square any direction");
    break;
    
  default:
    console.log("invalid piece name");
}

// Converte a nota em porcentagem em nota alfabetica
const gradePercentage = 105;

if(gradePercentage < 0 || gradePercentage > 100){
  console.log("invalid grade");
}
else if(gradePercentage >= 90){
  console.log("grade A");
}
else if(gradePercentage >= 80){
  console.log("grade B");
}
else if(gradePercentage >= 70){
  console.log("grade C");
}
else if(gradePercentage >= 60){
  console.log("grade D");
}
else if(gradePercentage >= 50){
  console.log("grade E");
}
else if(gradePercentage < 50){
  console.log("grade F");
}

// Checa se pelo menos um número no conjunto é par
const numberX = 1;
const numberY = 1;
const numberZ = 1;

if (numberX % 2 === 0 || numberY % 2 === 0 || numberZ % 2 === 0){
  console.log(true);
}
else{
  console.log(false);
}

// Checa se pelo menos um número no conjunto é ímpar
const numA = 2;
const numB = 4;
const numC = 6;

if (numA % 2 !== 0 || numB % 2 !== 0 || numC % 2 !== 0){
  console.log(true);
}
else{
  console.log(false);
}

