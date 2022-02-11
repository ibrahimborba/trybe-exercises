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
buttonHoliday.addEventListener('click', (holidayColor));

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