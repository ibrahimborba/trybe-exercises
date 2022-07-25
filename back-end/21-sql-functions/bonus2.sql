USE Pixar;
SELECT m.title
	FROM Movies AS m
 INNER JOIN BoxOffice AS bo
		ON m.id = bo.movie_id
    WHERE (bo.domestic_sales + bo.international_sales) >= 500000000
    AND m.length_minutes > 110;

SELECT m.title
	FROM Movies AS m
 WHERE m.id IN (SELECT bo.movie_id
									FROM BoxOffice AS bo
								 WHERE (bo.domestic_sales + bo.international_sales) >= 500000000
									 AND m.length_minutes > 110);

USE BeeMovies;

DELIMITER $$
	 CREATE TRIGGER insert_release_year
	 BEFORE INSERT ON movies
			FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(CURRENT_DATE());
END $$
DELIMITER ;

INSERT INTO movies (ticket_price, ticket_price_estimation)
VALUES (10, '15');

DELIMITER $$
	 CREATE TRIGGER insert_movies_logs
	 AFTER INSERT ON movies
			FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
	VALUES (NEW.movie_id, 'INSERT', CURRENT_DATE());
END $$
DELIMITER ;

INSERT INTO movies (ticket_price, ticket_price_estimation)
VALUES (20, '15');

SELECT * FROM movies_logs;

DELIMITER $$
	 CREATE TRIGGER update_price_estimation
	 BEFORE UPDATE ON movies
			FOR EACH ROW
BEGIN
  SET NEW.ticket_price_estimation = (CASE 
			WHEN NEW.ticket_price > OLD.ticket_price THEN 'Increasing'
			WHEN NEW.ticket_price < OLD.ticket_price THEN 'Decreasing'
			ELSE OLD.ticket_price_estimation
			END);
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
	VALUES (NEW.movie_id, 'UPDATE', CURRENT_DATE());
END $$
DELIMITER ;

DROP TRIGGER update_price_estimation;

UPDATE movies
	 SET ticket_price = 15
 WHERE movie_id = 1;

SELECT * FROM movies_logs;

DELIMITER $$
	 CREATE TRIGGER update_delete_logs
	 BEFORE DELETE ON movies
			FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
	VALUES (OLD.movie_id, 'DELETE', CURRENT_DATE());
END $$
DELIMITER ;

DROP TRIGGER update_delete_logs;

DELETE FROM movies
WHERE movie_id = 2;

SELECT * FROM movies_logs;