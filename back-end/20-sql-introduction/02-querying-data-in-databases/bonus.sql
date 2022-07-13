      USE PiecesProviders;
   SELECT piece, price
     FROM Provides
    WHERE provider = 'RBT'
 ORDER BY price DESC;
 
  SELECT *
    FROM Provides
ORDER BY price DESC
   LIMIT 5;
   
  SELECT provider, price
    FROM Provides
ORDER BY price DESC
   LIMIT 4
  OFFSET 2;
  
SELECT COUNT(provider)
  FROM Provides
 WHERE piece = 1;