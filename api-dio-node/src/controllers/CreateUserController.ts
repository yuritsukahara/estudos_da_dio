import { Request, Response } from 'express';

class CreateUserController{
     handle(req: Request, res: Response)  {
	const nome  = req.body.name;

    return res.json({mensagem: 'Usuário ${nome} criado'})
};}

export { CreateUserController}