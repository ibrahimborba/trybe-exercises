// 01 - Adiciona h1 como filha da body
let body = document.getElementsByTagName('body')[0];
let bodyTitle = document.createElement('h1');
bodyTitle.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(bodyTitle);

// 02 - Adiciona main como filha da body
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// 03 - Adiciona section como filha da main
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// 04 - Adiciona p como filha da section
let paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum';
section.appendChild(paragraph);

// 05 - Adiciona section left filha da main
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);