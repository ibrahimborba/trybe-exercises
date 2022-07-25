SELECT COUNT(s.song_id) AS cancoes,
			 COUNT(a.artist_id) AS artistas,
       COUNT(c.album_id) AS albuns
	FROM SpotifyClone.artists AS a
 INNER JOIN SpotifyClone.collection AS c
		ON a.artist_id = c.artist_id
 INNER JOIN SpotifyClone.songs AS s
		ON a.artist_id = s.artist_id;
    
SELECT COUNT(song_id) AS cancoes,
			 (SELECT COUNT(album_id) 
					FROM SpotifyClone.collection
       ) AS albuns,
       (SELECT COUNT(artist_id) 
					FROM SpotifyClone.artists
       ) AS artistas
	FROM SpotifyClone.songs;