import { Request, response, Response } from 'express';

class CreateUserController {
	handle(req: Request, res: Response) {
		const nome = req.body.nome;
		if (nome.length === 0) {
			return res
				.status(404)
				.json({ mensagem: 'Informe um nome de usuário' });
		}
		return res.status(201).json({ mensagem: `Usuário ${nome} criado` });
	}
}

export { CreateUserController };
