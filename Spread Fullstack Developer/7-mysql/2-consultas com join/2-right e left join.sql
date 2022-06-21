-- by default JOIN use INNER JOIN, this don't return NULL values.
-- to return all values, use ALTER JOIN with LEFT or RIGHT.

SELECT *
FROM `videos_canais` AS vc RIGHT OUTER JOIN videos AS v ON vc.fk_video = v.id_video 
RIGHT OUTER JOIN canais AS c ON vc.fk_video = c.id_canal



-- Exemplo de select com WHERE
SELECT *
FROM `videos_canais` JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal
WHERE canais.id_canal = 2