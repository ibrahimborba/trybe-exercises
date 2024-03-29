DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

CREATE TABLE SpotifyClone.pricing(
		CONSTRAINT PRIMARY KEY (plan_id),
    plan_id	INT NOT NULL AUTO_INCREMENT,
    plan VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.artists(
		CONSTRAINT PRIMARY KEY (artist_id),
    artist_id	INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.users(
		CONSTRAINT PRIMARY KEY (user_id),
    user_id	INT NOT NULL AUTO_INCREMENT,
    plan_id INT NOT NULL,
    FOREIGN KEY (plan_id) REFERENCES pricing (plan_id),
    user VARCHAR(255) NOT NULL,
    age INT(3) NOT NULL,
    subscription_date DATE NOT NULL
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.collection(
		CONSTRAINT PRIMARY KEY (album_id),
    album_id	INT NOT NULL AUTO_INCREMENT,
    artist_id	INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artists (artist_id),
		album VARCHAR(255) NOT NULL,
    release_year YEAR NOT NULL
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.songs(
		CONSTRAINT PRIMARY KEY (song_id),
    song_id	INT NOT NULL AUTO_INCREMENT,
    album_id	INT NOT NULL,
    artist_id	INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES collection (album_id),
    FOREIGN KEY (artist_id) REFERENCES artists (artist_id),
		song VARCHAR(255) NOT NULL,
    duration_seconds INT(3) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.history(
		CONSTRAINT PRIMARY KEY (song_id, user_id),
    song_id	INT NOT NULL,
    user_id	INT NOT NULL,
    FOREIGN KEY (song_id) REFERENCES songs (song_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    play_date DATETIME NOT NULL
) ENGINE = InnoDB;

CREATE TABLE SpotifyClone.following(
		CONSTRAINT PRIMARY KEY (artist_id, user_id),
    artist_id	INT NOT NULL,
    user_id	INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artists (artist_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
) ENGINE = InnoDB;

INSERT INTO SpotifyClone.pricing (plan, price)
VALUES ('gratuito',	0),
			 ('familiar',	7.99),
			 ('universitário',	5.99),
			 ('pessoal',	6.99);

INSERT INTO SpotifyClone.artists (artist)
VALUES ('Walter Phoenix'),
			 ('Peter Strong'),
			 ('Lance Day'),
			 ('Freedie Shannon'),
			 ('Tyler Isle'),
			 ('Fog');
       
INSERT INTO SpotifyClone.users (user,	age,	subscription_date,	plan_id)
VALUES ('Thati',	23,	'2019-10-20',	1),
			 ('Cintia',	35,	'2017-12-30',	2),
			 ('Bill',	20,	'2019-06-05',	3),
			 ('Roger',	45,	'2020-05-13',	4),
       ('Norman',	58,	'2017-02-17',	4),
       ('Patrick',	33,	'2017-01-06',	2),
       ('Vivian',	26,	'2018-01-05',	3),
       ('Carol',	19,	'2018-02-14',	3),
       ('Angelina',	42,	'2018-04-29',	2),
       ('Paul',	46,	'2017-01-17',	2);

INSERT INTO SpotifyClone.collection (album,	artist_id,	release_year)
VALUES ('Envious',	1,	'1990'),
			 ('Exuberant',	1,	'1993'),
       ('Hallowed Steam',	2,	'1995'),
       ('Incandescent',	3,	'1998'),
       ('Temporary Culture',	4,	'2001'),
       ('Library of liberty', 4,	'2003'),
       ('Chained Down',	5,	'2007'),
       ('Cabinet of fools',	5,	'2012'),
       ('No guarantees',	5,	'2015'),
       ('Apparatus',	6,	'2015');

INSERT INTO SpotifyClone.songs (album_id,	artist_id,	song,	duration_seconds)
VALUES (1,	1,	'Soul For Us',	200),
			 (1,	1,	'Reflections Of Magic',	163),
       (1,	1,	'Dance With Her Own',	116),
       (2,	1,	'Troubles Of My Inner Fire',	203),
       (2,	1,	'Time Fireworks',	152),
       (3,	2,	'Magic Circus',	105),
       (3,	2,	'Honey, So Do I',	207),
       (3,	2,	'Sweetie, Let''s Go Wild',	139),
       (3,	2,	'She Knows',	244),
       (4,	3,	'Fantasy For Me',	100),
       (4,	3,	'Celebration Of More',	146),
       (4,	3,	'Rock His Everything',	223),
       (4,	3,	'Home Forever',	231),
       (4,	3,	'Diamond Power',	241),
       (4,	3,	'Let''s Be Silly',	132),
       (5,	4,	'Thang Of Thunder',	240),
       (5,	4,	'Words Of Her Life',	185),
       (5,	4,	'Without My Streets',	176),
       (6,	4,	'Need Of The Evening',	190),
       (6,	4,	'History Of My Roses',	222),
       (6,	4,	'Without My Love',	111),
       (6,	4,	'Walking And Game',	123),
       (6,	4,	'Young And Father',	197),
       (7,	5,	'Finding My Traditions',	179),
       (7,	5,	'Walking And Man',	229),
       (7,	5,	'Hard And Time',	135),
       (7,	5,	'Honey, I''m A Lone Wolf',	150),
       (8,	5,	'She Thinks I Won''t Stay Tonight',	166),
       (8,	5,	'He Heard You''re Bad For Me',	154),
       (8,	5,	'He Hopes We Can''t Stay',	210),
       (8,	5,	'I Know I Know',	117),
       (9,	5,	'He''s Walking Away', 159),
       (9,	5,	'He''s Trouble',	138),
       (9,	5,	'I Heard I Want To Bo Alone',	120),
       (9,	5,	'I Ride Alone',	151),
       (10,	6,	'Honey',	79),
       (10,	6,	'You Cheated On Me',	95),
       (10,	6,	'Wouldn''t It Be Nice',	213),
       (10,	6,	'Baby',	136),
       (10,	6,	'You Make Me Feel So..',	83);

INSERT INTO SpotifyClone.history (song_id,	user_id,	play_date)
VALUES (36,	1,	'2020-02-28 10:45:55'),
			 (25,	1,	'2020-05-02 05:30:35'),
       (23,	1,	'2020-03-06 11:22:33'),
       (14,	1,	'2020-08-05 08:05:17'),
       (15,	1,	'2020-09-14 16:32:22'),
       (34,	2,	'2020-01-02 07:40:33'),
       (24,	2,	'2020-05-16 06:16:22'),
       (21,	2,	'2020-10-09 12:27:48'),
       (39,	2,	'2020-09-21 13:14:46'),
       (6,	3,	'2020-11-13 16:55:13'),
       (3,	3,	'2020-12-05 18:38:30'),
       (26,	3,	'2020-07-30 10:00:00'),
       (2,	4,	'2021-08-15 17:10:10'),
       (35,	4,	'2021-07-10 15:20:30'),
       (27,	4,	'2021-01-09 01:44:33'),
       (7,	5,	'2020-07-03 19:33:28'),
       (12,	5,	'2017-02-24 21:14:22'),
       (14,	5,	'2020-08-06 15:23:43'),
       (1,	5,	'2020-11-10 13:52:27'),
       (38,	6,	'2019-02-07 20:33:48'),
       (29,	6,	'2017-01-24 00:31:17'),
       (30,	6,	'2017-10-12 12:35:20'),
       (22,	6,	'2018-05-29 14:56:41'),
       (5,	7,	'2018-05-09 22:30:49'),
       (4,	7,	'2020-07-27 12:52:58'),
       (11,	7,	'2018-01-16 18:40:43'),
       (39,	8,	'2018-03-21 16:56:40'),
       (40,	8,	'2020-10-18 13:38:05'),
       (32,	8,	'2020-10-18 13:38:05'),
       (33,	8,	'2021-08-15 21:37:09'),
       (16,	9,	'2021-05-24 17:23:45'),
       (17,	9,	'2018-12-07 22:48:52'),
       (8,	9,	'2021-03-14 06:14:26'),
       (9,	9,	'2020-04-01 03:36:00'),
       (20,	10,	'2017-02-06 08:21:34'),
       (21,	10,	'2017-12-04 05:33:43'),
       (12,	10,	'2017-07-27 05:24:49'),
       (13,	10,	'2017-12-25 01:03:57');

INSERT INTO SpotifyClone.following (artist_id,	user_id)
VALUES (1,	1),
			 (4,	1),
       (3,	1),
       (1,	2),
       (3,	2),
       (2,	3),
       (1,	3),
       (4,	4),
       (5,	5),
       (6,	5),
       (6,	6),
       (3,	6),
       (1,	6),
       (2,	7),
       (5,	7),
       (1,	8),
       (5,	8),
       (6,	9),
       (4,	9),
       (3,	9),
       (2,	10),
			 (6,	10);
  