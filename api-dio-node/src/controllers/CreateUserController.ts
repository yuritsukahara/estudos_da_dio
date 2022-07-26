import { Request, response, Response } from 'express';
import { CreateUserService } from '../services/CreateUserServices';
class CreateUserController {
	handle(req: Request, res: Response) {
		const createUserService = new CreateUserService();
		const nome = req.body.nome;
		const email = req.body.email;

		if (nome.length === 0) {
			return res
				.status(404)
				.json({ mensagem: 'Informe um nome de usuário' });
		}
		const user = createUserService.execute({ nome, email });
		return res.status(201).json({ user });
	}
}

export { CreateUserController };
