//Parte 1 - Criação de elementos
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

let list = document.createElement('ul');

for (let i = 0; i < numberList.length; i += 1){
  let number = numberList[i];
  let listItem = document.createElement('li');
  listItem.innerText = number;
  list.appendChild(listItem);
}

sectionRight.appendChild(list);

// 09 - Adiciona três tags h3 filhas da main
let h3One = document.createElement('h3');
let h3Two = document.createElement('h3');
let h3Three = document.createElement('h3');
main.appendChild(h3One, h3Two, h3Three);


//Parte 2 - Alteração e remoção de elementos
// 01 - Adiciona classe title na tag h1
bodyTitle.className = 'title';

// 02 - Adiciona classe description nas h3
h3One.className = 'description';
h3Two.className = 'description';
h3Three.className = 'description';

// 03 - Remove section left
main.removeChild(sectionLeft);

// 04 - Centraliza section right
document.getElementsByClassName('right-content')[0].style.marginRight = 'auto';

// 05 - Muda cor section center
document.getElementsByClassName('center-content')[0].style.background = 'green';

// 06 - Remove dois ultimos elementos da lista
let listItem = document.getElementsByTagName('li');
for (let  i = listItem.length - 1; i >= listItem.length - 2; i -= 1) {
  if (listItem[i].innerText.includes('nove') || listItem[i].innerText.includes('dez')){
    list.removeChild(listItem[i]);
  }
}