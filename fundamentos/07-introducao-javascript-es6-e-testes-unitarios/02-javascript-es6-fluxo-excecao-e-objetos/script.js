// Requisito 1 - verifica se os valores dos inputs estão preenchidos e se são números
const verifyInputs = (input1, input2) => {
  if (input1 === '' || input2 === '') {
    throw new Error('Preencha os dois campos com números');
  } else if (isNaN(parseInt(input1)) === true || isNaN(parseInt(input2)) === true) {
    throw new Error('Insira apenas números');
  }
}

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    verifyInputs(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    document.getElementById('result').innerHTML = `Resultado: ${error.message}`;
  }
  
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

