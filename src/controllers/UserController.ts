import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();

// O "export" antes de "class" é obrigatório!
export class UserController {
async criar(req: Request, res: Response) {
    try {
    const { nome, email, senha } = req.body;

    const novoUsuario = await userService.criarUsuario(nome, email, senha);

    res.status(201).json(novoUsuario);
    
    } catch (error: any) {
    res.status(400).json({ erro: error.message });
    }
}
}