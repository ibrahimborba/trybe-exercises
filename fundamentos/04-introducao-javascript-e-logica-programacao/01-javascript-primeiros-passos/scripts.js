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
  console.log("ângulo inválido");
}
else if (angleX + angleY + angleZ !== 180){
  console.log(false);
}
else if (angleX + angleY + angleZ === 180){
  console.log(true);
}