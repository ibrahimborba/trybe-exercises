SELECT  "This is SQL Exercise, Practice and Solution";
SELECT 1 AS number_one,
	   2 AS number_two,
       3 AS number_three;
SELECT 10 + 15;
SELECT 10 * 15;

   USE Scientists;
SELECT * FROM Scientists;

   USE Scientists;
SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho
  FROM Projects;
  
     USE Scientists;
  SELECT name 
    FROM Scientists
ORDER BY name ASC;

     USE Scientists;
  SELECT name 
    FROM Projects
ORDER BY name DESC;

   USE Scientists;
SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.')
  FROM Projects;
  
     USE Scientists;
  SELECT name, hours 
    FROM Projects
ORDER BY hours DESC
   LIMIT 3;
   
   USE Scientists;
SELECT DISTINCT * 
  FROM AssignedTo;
  
     USE Scientists;
  SELECT name 
    FROM Projects
ORDER BY hours ASC
   LIMIT 1
  OFFSET 1;
  
   USE Scientists;
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.') AS count
  FROM Scientists;