// Exercícios Fixação - Variáveis
let myName = "Ibrahim";
const birthCity = "São Paulo";
let birthYear = 1993;

birthYear = 2030;
// birthCity = "Belo Horizonte";

console.log(myName, birthCity, birthYear);

// Exercícios Fixação - Tipos
const base = 5;
const height = 8;
const area = base * height;
const perimeter = 2 * (base + height);

console.log(area, perimeter);

// Exercícios Fixação - If Else
const grade = 70;
if (grade >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}

else if (grade < 80 && grade >= 60) {
    console.log("Você está na nossa lista de espera");
}

else {
    console.log("Você foi reprovada(o)");
}