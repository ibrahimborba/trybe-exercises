// Imprime no console uma mensagem d eboas vindas com o nome da personagem
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

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

//
let infoTwo = {
  personagem: 'Tio Patinhas',
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for(let key in info) {
  if(info[key] === infoTwo[key]){
    console.log('Ambos recorrentes');
  }else{
    console.log(info[key] + ' e ' + infoTwo[key]);
  }
}

//Acesse as chaves nome , sobrenome e titulo, e faça um console.log
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + "'" + leitor['livrosFavoritos'][0]['titulo'] + "'");