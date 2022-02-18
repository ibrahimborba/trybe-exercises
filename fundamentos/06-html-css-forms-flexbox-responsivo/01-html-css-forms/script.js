const buttonSend = document.getElementById('send-form');

function getForm(event) {
  event.preventDefault();
}

buttonSend.addEventListener('click', getForm);