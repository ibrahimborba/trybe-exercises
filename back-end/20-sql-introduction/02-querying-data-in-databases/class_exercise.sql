/* 
1 Eu quero somente os nomes dos livros cadastrados na biblioteca;
2 Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
3 Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro 'Um livro do Ano' e 'Novas conquistas novas responsabilidades';
4 Quero os livros mais recentes primeiro, e também em ordem alfabética;
5 Eu quero todas as informações do livro com maior estoque na biblioteca. Somente o com o maior estoque;
6 Eu quero criar uma lista com os 4 livros mais vendidos. Como poderia encontrar isso?
*/

USE faculdade;

SELECT nome
  FROM biblioteca;

SELECT COUNT(*)
  FROM biblioteca;

SELECT *
  FROM biblioteca
 WHERE nome <> 'Um livro do Ano'
   AND  nome <> 'Novas conquistas novas responsabilidades'
 LIMIT 2;

-- Opção para o exercício 3
SELECT *
  FROM biblioteca
 LIMIT 2
OFFSET 2;

SELECT *
  FROM biblioteca
 ORDER BY ano_lancamento DESC, 
	      nome ASC;
          
SELECT *
  FROM biblioteca
 ORDER BY quantidade DESC
 LIMIT 1;
    
SELECT *
  FROM biblioteca
 ORDER BY vendas DESC
 LIMIT 4;
    