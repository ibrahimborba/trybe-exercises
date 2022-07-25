SELECT s.song AS nome,
			 COUNT(h.song_id) AS reproducoes
	FROM SpotifyClone.songs AS s
 INNER JOIN SpotifyClone.history AS h
		ON s.song_id = h.song_id
 INNER JOIN SpotifyClone.users AS u
		ON u.user_id = h.user_id
 WHERE u.plan_id = 1 OR u.plan_id = 4
 GROUP BY s.song
 ORDER BY s.song;

