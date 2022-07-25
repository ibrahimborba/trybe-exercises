CREATE SCHEMA IF NOT EXISTS normalization;

SHOW DATABASES;

USE normalization;

CREATE TABLE staff (
		PRIMARY KEY (funcionario_id),
    funcionario_id	INT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    celular VARCHAR(15) NOT NULL,
    cadastro_data DATE NOT NULL,
    cadastro_hora TIME
)
ENGINE = InnoDB;

CREATE TABLE departments (
		PRIMARY KEY (setor_id),
    setor_id	INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50)
)
ENGINE = InnoDB;

CREATE TABLE staff_departments (
		PRIMARY KEY (funcionario_id, setor_id),
    funcionario_id INT,
		setor_id INT,
    FOREIGN KEY (funcionario_id) REFERENCES staff (funcionario_id),
		FOREIGN KEY (setor_id) REFERENCES departments (setor_id)
)
ENGINE = InnoDB;

USE normalization;
INSERT INTO staff (funcionario_id, nome, sobrenome, email, celular, cadastro_data, cadastro_hora)
VALUES (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05', '08:50:25');

INSERT INTO departments (nome)
VALUES ('Administração');

INSERT INTO staff_departments (setor_id, funcionario_id)
VALUES (1, 12);

SELECT * FROM staff_departments;
