USE pixar;

SELECT m.id, m.title, bo.domestic_sales, bo.international_sales
  FROM movies AS m
			 INNER JOIN box_office AS bo
			 ON m.id = bo.movie_id;

SELECT m.id, bo.domestic_sales, bo.international_sales
  FROM movies AS m
			 INNER JOIN box_office AS bo
			 ON m.id = bo.movie_id
       WHERE bo.international_sales > bo.domestic_sales;

SELECT m.id, m.title, bo.rating
  FROM movies AS m
			 INNER JOIN box_office AS bo
			 ON m.id = bo.movie_id
       ORDER BY bo.rating DESC;
       
SELECT t.*, m.*
  FROM theater AS t
			 LEFT JOIN movies AS m
			 ON t.id = m.theater_id
       ORDER BY t.name ASC;

SELECT t.*, m.*
  FROM theater AS t
			 RIGHT JOIN movies AS m
			 ON t.id = m.theater_id
       ORDER BY t.name ASC;

SELECT m.*, bo.rating
  FROM movies AS m
			 INNER JOIN box_office AS bo
			 ON m.id = bo.movie_id
       WHERE m.theater_id IS NOT NULL
       AND bo.rating > 8;
