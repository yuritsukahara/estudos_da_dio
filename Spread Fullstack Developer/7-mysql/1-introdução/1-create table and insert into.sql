CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas
    (nome, nascimento)
VALUES
    ('Yuri', '1993-04-10')
INSERT INTO pessoas
    (nome, nascimento)
VALUES
    ('Ana', '2001-02-21')
INSERT INTO pessoas
    (nome, nascimento)
VALUES
    ('Yuki', '2016-03-01')
