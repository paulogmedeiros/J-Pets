const { PrismaClient } = require('@prisma/client');
class DonosPetRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // criando nova empresa
    async insertDonoPet(data) {

        return await this.prisma.$transaction(async (prismaTx) => {
            const login = await prismaTx.login.create({
                data: {
                    email: data.email,
                    senha: data.senha,
                    tipo: 'DNP',
                }
            })
    
            await prismaTx.tutores_pets.create({
                data:{
                  login_id: login.id,
                  nome: data.nome
                }
            })
        })

    }
}

module.exports = new DonosPetRepository()