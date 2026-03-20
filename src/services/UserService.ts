import prisma from '../database/prismaClient';

export class UserService {
async criarUsuario(nome: string, email: string, senha: string) {
    // 1. Verifica se o email já existe
    const usuarioExiste = await prisma.usuario.findUnique({
where: { email }
    });

    if (usuarioExiste) {
throw new Error('Este e-mail já está cadastrado.');
    }

    // 2. Cria o usuário
    const novoUsuario = await prisma.usuario.create({
data: {
        nome,
        email,
        senha
}
    });

    return novoUsuario;
}
}