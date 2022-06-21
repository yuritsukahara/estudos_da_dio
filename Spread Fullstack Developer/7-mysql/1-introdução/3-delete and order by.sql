-- o thanos permanente, uma boa prática é sempre selecionar e visualizar a 
-- informação antes de deletar e após ter certeza, substitui o comando SELECT por DELETE

SELECT FROM pessoa WHERE id=5;

DELETE FROM pessoa WHERE id=5;

SELECT FROM pessoa ORDER BY nome DESC; -- by default the ordenation is crescent


