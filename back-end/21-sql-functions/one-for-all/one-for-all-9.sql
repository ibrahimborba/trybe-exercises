SELECT COUNT(h.song_id) AS quantidade_musicas_no_historico
	FROM SpotifyClone.users AS u
 INNER JOIN SpotifyClone.history AS h
		ON u.user_id = h.user_id
 WHERE u.user_id = 3;
 
SELECT (SELECT COUNT(h.song_id) 
					FROM SpotifyClone.history AS h
          WHERE u.user_id = h.user_id
       ) AS quantidade_musicas_no_historico
	FROM SpotifyClone.users AS u
 WHERE u.user_id = 3;

