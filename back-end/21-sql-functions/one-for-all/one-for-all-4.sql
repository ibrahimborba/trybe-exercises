SELECT u.user AS usuario,
-- Source: https://www.w3resource.com/sql/aggregate-functions/max-date.php
			 IF(YEAR(MAX(h.play_date)) < '2021', 'Usuário inativo', 'Usuário ativo') AS condicao_usuario
	FROM SpotifyClone.users AS u
 INNER JOIN SpotifyClone.history AS h
		ON u.user_id = h.user_id
 GROUP BY u.user
 ORDER BY u.user ASC;
