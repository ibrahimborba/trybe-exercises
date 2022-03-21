// Exercício 3 - imprime Marte depois de 4 segundos
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

//setTimeout(() => getPlanet(), 4000);

// Exercício 4 - 
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
  console.log(`Mars temperature is: ${callback()} degree Celsius`);
}

setTimeout(() => sendMarsTemperature(getMarsTemperature), messageDelay());// imprime "Mars temperature is: 20 degree Celsius", por exemplo
