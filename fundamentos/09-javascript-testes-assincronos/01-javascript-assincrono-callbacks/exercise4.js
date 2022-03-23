// Exercício 4 - imprime a temperatura em Marte com um delay de até 5s
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    console.log(`Mars temperature is: ${callback()} degree Celsius`);
  }, messageDelay());
}

sendMarsTemperature(getMarsTemperature);
