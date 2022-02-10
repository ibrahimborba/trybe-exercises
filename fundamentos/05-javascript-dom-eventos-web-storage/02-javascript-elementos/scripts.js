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

// 06 - Adiciona section right filha da main
let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// 07 - Adiciona img filha da section left
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
sectionLeft.appendChild(image);

// 08 - Adiciona lista nao ordenada filha da section right
let numberList = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez'
];

for (let i = 0; i < numberList.length; i += 1){
  let number = numberList[i];
  let list = document.createElement('ul');
  list.innerText = number;
  sectionRight.appendChild(list);
}
