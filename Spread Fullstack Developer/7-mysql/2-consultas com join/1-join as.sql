SELECT vc.id_canais_video, v.nome_video, v.autor_video, c.nome_canal
FROM `videos_canais` AS vc JOIN videos AS v ON vc.fk_video = v.id_video 
JOIN canais AS c ON c.id_canal = vc.fk_canal 