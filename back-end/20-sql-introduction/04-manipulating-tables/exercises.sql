USE Pixar;
SET SQL_SAFE_UPDATES = 0;

INSERT INTO Movies(title, director, year, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
	   ('Procurando Nemo', 'John Lasseter', 2003, 107),
	   ('Os Incríveis', 'Brad Bird', 2004, 116),
       ('WALL-E', 'Pete Docter', 2008, 104);

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES (6.8, 450000000, 370000000);

UPDATE Movies
   SET director = 'Andrew Staton'
 WHERE title = 'Procurando Nemo';

UPDATE Movies
SET title = 'Ratatouille'
WHERE id = 3;

DELETE FROM Movies
 WHERE title = 'WALL-E';

DELETE FROM BoxOffice
 WHERE movie_id = 2;

DELETE FROM Movies
 WHERE director = 'Andrew Staton';

UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

UPDATE BoxOffice
   SET rating = 6.0
 WHERE domestic_sales > 200000000
   AND international_sales < 300000000;

DELETE FROM BoxOffice
 WHERE movie_id IN (1, 6, 7, 8);
 
DELETE FROM Movies
 WHERE length_minutes < 100;

SELECT * FROM Movies;
