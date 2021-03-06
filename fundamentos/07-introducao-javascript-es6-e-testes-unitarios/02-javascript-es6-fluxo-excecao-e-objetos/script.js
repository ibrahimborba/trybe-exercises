// PARTE 1
// Requisitos 1 e 2 - verifica se os valores dos inputs estão preenchidos e se são números
const verifyInputs = (input1, input2) => {
  if (input1 === '' || input2 === '') {
    throw new Error('Preencha os dois campos com números');
  } else if (isNaN(parseInt(input1)) === true || isNaN(parseInt(input2)) === true) {
    throw new Error('Insira apenas números');
  }
}

// Requisito 3 - adiciona <finally> para resetar os inputs
function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    verifyInputs(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `Resultado: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

// PARTE 2
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, ${order['address']['street']}, Nº: ${order['address']['number']}, AP: ${order['address']['apartment']}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order['name'] = 'Luiz Silva';
  order['payment']['total'] = 50;
  console.log(`Olá ${order['name']}, o total do seu pedido de ${Object.keys(order['order']['pizza']).join(', ')} e ${order['order']['drinks'][Object.keys(order['order']['drinks'])]['type']} é R$ ${parseFloat(order['payment']['total']).toFixed(2)}`);
}

orderModifier(order);

// PARTE 3
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Requisito 1 - adiciona o turno da noite na lesson2
function addProperty(object, key, keyValue) {
  const newObject = {};
  newObject[key] = keyValue;
  Object.assign(object, newObject);
}
addProperty(lesson2, 'turno', 'noite');

// Requisito 2 - lista as keys de um objeto
function listObjectKeys(object) {
  return Object.keys(object);
}
console.log(listObjectKeys(lesson2));

// Requisito 3 - mostra o tamanho de um objeto
function objectLength(object) {
  return Object.keys(object).length;
}
console.log(objectLength(lesson2));

// Requisito 4 - lista os valores de um objeto
function listObjectValues(object) {
  return Object.values(object);
}
console.log(listObjectValues(lesson2));

// Requisito 5 - cria um objeto de nome allLessons que agrupa todas as aulas
const allLessons = {lesson1: {}, lesson2: {}, lesson3: {}}
Object.assign(allLessons['lesson1'], lesson1);
Object.assign(allLessons['lesson2'], lesson2);
Object.assign(allLessons['lesson3'], lesson3);
console.log(allLessons);

// Requisito 6 - retorna numero total de estudantes
function totalStudents() {
  let studentCount = 0;
  for (let i in allLessons) {
    studentCount += allLessons[i]['numeroEstudantes'];
  }
  return studentCount;
}
console.log(totalStudents());

// Requisito 7 - obtem o valor da chave de acordo com a sua posição no objeto
function getValueByNumber(object, index) {
  return listObjectValues(object)[index];
}
console.log(getValueByNumber(lesson1, 0));

// Requisito 8 -  verifica se o par (chave / valor) existe na função
function verifyPair(object, key, keyValue) {
  for (let i in listObjectKeys(object)) {
    if(listObjectKeys(object)[i].includes(key) === true
    && listObjectValues(object)[i].includes(keyValue) === true) {
    return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// BÔNUS
// Requisito 1 - retorna numero total de estudantes
function mathStudents() {
  let studentCount = 0;
  for (let i in allLessons) {
    if (allLessons[i]['materia'] === 'Matemática') {
      studentCount += allLessons[i]['numeroEstudantes'];
    }
  }
  return studentCount;
}
console.log(mathStudents());

// Requisito 2 - retorna relatório sobre professor
function createReport(object, name) {
  const arrayValues = Object.values(object);
  const report = {professor: name};
  let studentCount = 0;
  let classes = [];
  for (let i in arrayValues) {
    if (Object.values(arrayValues[i]).includes(name)) {
      studentCount += arrayValues[i]['numeroEstudantes'];
      classes.push(arrayValues[i]['materia']);
    }
  }
  report['aulas'] = classes;
  report['estudantes'] = studentCount;
  return report;  
}
console.log(createReport(allLessons, 'Maria Clara'));
