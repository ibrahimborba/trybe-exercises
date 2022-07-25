SELECT s.song AS cancao,
			 COUNT(h.song_id) AS reproducoes
	FROM SpotifyClone.songs AS s
 INNER JOIN SpotifyClone.history AS h
		ON s.song_id = h.song_id
 GROUP BY s.song
 ORDER BY COUNT(h.song_id) DESC, s.song ASC
 LIMIT 2;

