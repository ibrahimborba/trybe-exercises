SELECT a.artist AS artista,
			 c.album AS album,
       COUNT(f.user_id) AS seguidores
	FROM SpotifyClone.artists AS a
 INNER JOIN SpotifyClone.collection AS c
		ON a.artist_id = c.artist_id
 INNER JOIN SpotifyClone.following AS f
		ON a.artist_id = f.artist_id
 GROUP BY a.artist, c.album
 ORDER BY COUNT(f.user_id) DESC,
					a.artist ASC,
          c.album ASC;

