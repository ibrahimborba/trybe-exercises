// 01 - Adiciona h1 como filha da body
let body = document.getElementsByTagName('body')[0];
let bodyTitle = document.createElement('h1');
bodyTitle.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(bodyTitle);

