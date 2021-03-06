function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// 01 - Cria lista com dias de dezembro
let daysList = document.getElementById('days');

for (let i in dezDaysList) {
  let dayListItem = document.createElement('li');
  dayListItem.innerHTML = dezDaysList[i];
  dayListItem.className = 'day';
  if (dayListItem.innerText === '24' || dayListItem.innerText === '31') {
    dayListItem.className += ' holiday';
  } else if (dayListItem.innerText === '4' || dayListItem.innerText === '11' || dayListItem.innerText === '18') {
    dayListItem.className += ' friday';
  } else if (dayListItem.innerText === '25') {
    dayListItem.className += ' friday holiday';
  }
  daysList.appendChild(dayListItem);
}

// 02 - Cria botão para feriado
function holidayButton(string) {
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  let buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerHTML = string;
  buttonContainer.appendChild(buttonHoliday);
}
holidayButton('Feriados');

// 03 - Adiciona evento de click ao buttonHoliday que altera a cor de fundo dos feriados
let buttonHoliday = document.getElementById('btn-holiday');
buttonHoliday.addEventListener('click', holidayColor);

function holidayColor () {
  let holiday = document.getElementsByClassName('holiday');
  for (let i = 0; i < holiday.length; i += 1) {
    if (holiday[i].style.backgroundColor !== 'green') {
      holiday[i].style.backgroundColor = 'green';
      holiday[i].style.color = 'white';
    } else {
      holiday[i].style.backgroundColor = 'rgb(238,238,238)';
      holiday[i].style.color = '#777';
    }
  }
}

// 04 - Cria botão para sexta-feiras
function fridayButton(string) {
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  let buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerHTML = string;
  buttonContainer.appendChild(buttonFriday);
}
fridayButton('Sexta-feira');

// 05 - Adiciona evento de click ao buttonFriday que altera o texto das sextas-feiras
let buttonFriday = document.getElementById('btn-friday');
buttonFriday.addEventListener('click', fridayText);

// Cria um array para transformar em sextou e outro para guardar os dias originais
let friday = document.getElementsByClassName('friday');
let fridayDays = [];
for (let i = 0; i < friday.length; i += 1) {
  fridayDays.push(friday[i].innerText);
}

function fridayText () {
  for (let i = 0; i < friday.length; i += 1) {
    if (friday[i].innerText !== 'sextou!') {
      friday[i].innerText = 'sextou!';
    } else if (friday[i].innerText === 'sextou!') {
      friday[i].innerText = fridayDays[i];
    }
  }
}

// 06 - Efeito de zoom com mouseover e mouseleave nos dias do mês do calendário
let daysZoom = document.getElementById('days');

daysZoom.addEventListener('mouseover', zoomIn);
function zoomIn (event) {
  event.target.style.fontSize = '30px';
}

daysZoom.addEventListener('mouseout', zoomOut);
function zoomOut (event) {
  event.target.style.fontSize = '20px';
}

// 07 - Adiciona uma tarefa personalizada
let myTasks = document.getElementsByClassName('my-tasks')[0];

function addTask (task) {
  let taskElement = document.createElement('span');
  taskElement.innerHTML = task;
  myTasks.appendChild(taskElement);
}
addTask('cozinhar');

// 08 - Adiciona cor para legenda
function colorizeNote (color) {
  let noteColor = document.createElement('div');
  noteColor.className = 'task';
  noteColor.style.border = 'thick solid';
  noteColor.style.borderColor = color;
  myTasks.appendChild(noteColor);  
}
colorizeNote('green');

// 09 - Adiciona um evento que seleciona a task
function selectTask () {
  let taskSelectDeselect = document.getElementsByClassName('task')[0];

  taskSelectDeselect.addEventListener('click', selectDeselect);
  function selectDeselect () {
    if (taskSelectDeselect.className === 'task') {
      taskSelectDeselect.className += ' selected';
      taskSelectDeselect.style.backgroundColor = 'green';
    } else {
      taskSelectDeselect.className = 'task';
      taskSelectDeselect.style.backgroundColor = 'white';
    }
  }
}
selectTask();

// 10 - Adiciona cor no dia do mês clicado
let taskSelected = document.getElementsByClassName('task')[0];
let taskSelectedColor = taskSelected.style.backgroundColor;

daysZoom.addEventListener('click', colorizeDay);
function colorizeDay (event) {
  if (taskSelected.className === 'task selected' && event.target.style.color !== 'green') {
    event.target.style.color = 'green';
  } else if (taskSelected.className === 'task selected' && event.target.style.color === 'green') {
    event.target.style.color = '#777';
  }
}

// Bonus - 

