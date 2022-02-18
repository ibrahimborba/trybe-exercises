const buttonSend = document.getElementById('send-form');
const photoAgreement = document.getElementById('info-agreement');
const hasMaxLength = document.getElementsByClassName('has-maxlength');

function checkMaxLength() {
  for (let i = 0; i < hasMaxLength.length; i += 1) {
    const inputValue = hasMaxLength[i].value;
    if (inputValue.length === hasMaxLength[i].maxLength) {
      alert('Dados Inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }  
}

function getForm(event) {
  if (photoAgreement.checked !== true) {
    event.preventDefault();
    alert('Precisamos que autorize o uso de fotos pra prosseguir com sua candidatura');
  } else {
    checkMaxLength();
  }
}
buttonSend.addEventListener('click', getForm);
