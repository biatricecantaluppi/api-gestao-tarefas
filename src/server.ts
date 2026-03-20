import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//rota de teste com typescript
app.get('/ping', (req: Request, res: Response) => {
    res.json({ mensagem: 'O Servidor TypeScript está online e roteando!'});

});

app.listen(PORT, () => {
    console.log(`Servidor voando alto na porta ${PORT}`);
});
