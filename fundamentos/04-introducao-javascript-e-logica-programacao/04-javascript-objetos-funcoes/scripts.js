let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprime no console uma mensagem d eboas vindas com o nome da personagem
console.log('Bem-vinda, ' + info['personagem']);

// Insere nova propriedade no objeto e imprime o objeto
info['recorrente'] = 'Sim';

console.log(info);

// Mostra as keys do objeto
for(let keys in info){
  console.log(keys);
}

// Mostra os valores das keys do objeto
for(let keys in info){
  console.log(info[keys]);
}