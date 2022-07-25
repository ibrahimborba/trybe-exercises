SELECT a.artist AS artista,
			 c.album AS album
	FROM SpotifyClone.artists AS a
 INNER JOIN SpotifyClone.collection AS c
		ON a.artist_id = c.artist_id
 WHERE a.artist_id = 1
 ORDER BY c.album;

