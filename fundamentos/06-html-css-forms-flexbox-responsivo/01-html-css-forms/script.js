const buttonSend = document.getElementById('send-form');
const photoAgreement = document.getElementById('info-agreement');

function getForm(event) {
  if (photoAgreement.checked !== true) {
    event.preventDefault();
    alert('Precisamos que autorize o uso de fotos pra prosseguir com sua candidatura');
  } else {
    alert('Seu formulário foi enviado!');
  }
}

buttonSend.addEventListener('click', getForm);