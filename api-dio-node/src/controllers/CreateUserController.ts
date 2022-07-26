import { Request, Response } from 'express';

class CreateUserController {
	handle(req: Request, res: Response) {
		const nome = req.body.nome;

		return res.status(201).json({ mensagem: `Usuário ${nome} criado` });
	}
}

export { CreateUserController };
