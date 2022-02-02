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
else {
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
else {
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
const gradePercentage = 0;
let gradeLetter = "to be defined";

if(gradePercentage < 0 || gradePercentage > 100){
  console.log("invalid grade");
}
else if(gradePercentage >= 90){
  gradeLetter = "A";
}
else if(gradePercentage >= 80){
  gradeLetter = "B";
}
else if(gradePercentage >= 70){
  gradeLetter = "C";
}
else if(gradePercentage >= 60){
  gradeLetter = "D";
}
else if(gradePercentage >= 50){
  gradeLetter = "E";
}
else{
  gradeLetter = "F";
}

console.log(gradeLetter);

// Checa se pelo menos um número no conjunto é par
const isEvenX = 1;
const isEvenY = 1;
const isEvenZ = 1;

if (isEvenX % 2 === 0 || isEvenY % 2 === 0 || isEvenZ % 2 === 0){
  console.log(true);
}
else{
  console.log(false);
}

// Checa se pelo menos um número no conjunto é ímpar
const isOddX = 2;
const isOddY = 4;
const isOddZ = 6;

if (isOddX % 2 !== 0 || isOddY % 2 !== 0 || isOddZ % 2 !== 0){
  console.log(true);
}
else{
  console.log(false);
}

// Calcula o lucro total da venda de um produto
const saleValue = 10;
const costValue = 5;
const costTax = 0.2;
let soldQuantity = 1000;
let profitTotal = 0;

if(saleValue < 0 || costValue < 0 || soldQuantity < 0){
  console.log("invalid Value");
}
else{
  profitTotal = soldQuantity * (saleValue - (costValue * (1 + costTax)));
  console.log(profitTotal);
}

// Calcula o salário líquido de uma pessoa CLT
let incomeGross = 5000;

// Cálculo do INSS
let taxINSS = 0;

if(incomeGross <= 1556.94){
  taxINSS = incomeGross*0.08;
} 
else if(incomeGross > 1556.94 && incomeGross <= 2594.92){
  taxINSS = incomeGross*0.09;
}
else if(incomeGross > 2594.92 && incomeGross <= 5189.82){
  taxINSS = incomeGross*0.11;
}
else{
  taxINSS = 570.88;
}

// Cálculo do IR
let taxIR = 0;
let installment =0;
let incomeBase = incomeGross - taxINSS;

if(incomeBase <= 1903.98){
  taxIR = 0;
}
else if(incomeBase > 1903.98 && incomeBase <= 2826.65){
  taxIR = 0.075*incomeBase - 142.80;
}
else if(incomeBase > 2826.65 && incomeBase <= 3751.05){
  taxIR = 0.15*incomeBase - 354.80;
}
else if(incomeBase > 3751.05 && incomeBase <= 4664.68){
  taxIR = 0.225*incomeBase - 636.13;
}
else{
  taxIR = 0.275*incomeBase - 869.36;
}

let incomeNet = incomeBase - taxIR;

console.log(incomeGross, incomeBase, incomeNet);