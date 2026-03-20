import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();
const userController = new UserController();

// Rota para criar usuário
router.post('/', userController.criar);

export default router;