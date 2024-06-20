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

    async deleteDonoPetPorIdLogin(loginId, donoPetId){
        return await this.prisma.$transaction(async (prismaTx) => {
            await prismaTx.avaliacoes.deleteMany({
                where:{
                    tutor_pet_id: donoPetId
                }
            })

            await prismaTx.favoritos.deleteMany({
                where:{
                    tutor_pet_id: donoPetId
                }
            })

            await prismaTx.tutores_pets.delete({
                where:{
                    id: donoPetId
                }
            })

            await prismaTx.login.delete({
                where:{
                    id: loginId
                }
            })
        })
    }

    async selectLoginDonoPets(loginId){
        return await this.prisma.login.findFirst({
            where:{
                id: loginId
            },
            select:{
                id: true,
                email: true,
                tipo: true,
                tutores_pets:{
                    select:{
                        id:true
                    }
                }
            }
        })
    }
}

module.exports = new DonosPetRepository()