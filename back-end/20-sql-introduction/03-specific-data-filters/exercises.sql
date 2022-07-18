USE PecasFornecedores;

SELECT *
  FROM Pecas
 WHERE name LIKE 'GR%';

SELECT *
  FROM Fornecimentos
 WHERE code = 2
 ORDER BY fornecedor ASC;
 
 SELECT peca, preco, fornecedor
  FROM Fornecimentos
 WHERE fornecedor LIKE '%N%'
 ORDER BY fornecedor ASC;
 
SELECT *
  FROM Fornecedores
 WHERE name LIKE '%LTDA';

SELECT COUNT(*)
  FROM Fornecedores
 WHERE name LIKE '%F%';

SELECT *
  FROM Fornecimentos
  WHERE preco BETWEEN 15 AND 40
  ORDER BY preco ASC;

SELECT COUNT(*)
  FROM Vendas
  WHERE order_date BETWEEN 2018-04-15 AND 2019-07-30;
