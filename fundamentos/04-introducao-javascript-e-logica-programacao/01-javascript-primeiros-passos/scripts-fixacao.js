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
const grade = 80;
if (grade >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}

else if (grade < 80 && grade >= 60) {
    console.log("Você está na nossa lista de espera");
}

else {
    console.log("Você foi reprovada(o)");
}

// Exercícios Fixação - Operadores &&
const currentHour = 11;
let message = "";

if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
}

else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
}

else if (currentHour > 11 && currentHour < 14){
    message = "Hora do almoço!!!";
}

else if (currentHour > 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

// Exercícios Fixação - Operadores ||
let weekDay = "domingo";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
}
else {
    console.log("Ué, não conheço esse dia da semana :(");
}

// Exercícios Fixação - Switch Case
let candidateStatus = "lista";

switch (candidateStatus) {
    case "aprovada":
        console.log("aprovada");
        break;

    case "lista":
        console.log("lista");
        break;

    case "reprovada":
        console.log("reprovada");
        break;

    default:
        console.log("não se aplica");
}