const a = 2;
const b = 5;

let sum = a + b;
let subtract = a - b;
let multiply = a * b;
let divide = a / b;
let modulus = a % b;

console.log (sum, subtract, multiply, divide, modulus);

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