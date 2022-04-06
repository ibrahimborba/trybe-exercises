import { Component } from "react";
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render () {
    return conteudos.map((subject) => {
      return <ul key={ subject.bloco }>
        <li>O conteúdo é: {subject.conteudo}</li>
        <li>Status: {subject.status}</li>
        <li>Bloco: {subject.bloco}</li>
      </ul>
      });
  }
};

export default Content;
