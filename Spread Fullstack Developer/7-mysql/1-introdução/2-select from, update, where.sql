SELECT *
FROM pessoa;
SELECT nome
FROM pessoa;
UPDATE pessoa SET nome='Yuri Tsukahara';
-- tomar cuidado com usar update sem o comando WHERE
UPDATE pessoa SET nome='Pedro' WHERE id=1;