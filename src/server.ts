import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Usando as rotas de usuário
app.use('/usuarios', userRoutes);

// Rota de teste
app.get('/ping', (req: Request, res: Response) => {
    res.json({ mensagem: 'O Servidor TypeScript está online e roteando!'});
});

app.listen(PORT, () => {
    console.log(` Servidor voando alto na porta ${PORT}`);
});