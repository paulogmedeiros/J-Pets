const { PrismaClient } = require('@prisma/client');

class ServicosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectServicos() {
        // pegando todos os servicos
        return await this.prisma.servicos.findMany({
            select: {
                id: true,
                nome: true,
                animal_id:true,
                animais: {
                    select: {
                        id: true,
                        nome: true,
                    }
                }
            }
        });
    }

    async selectSevicosPorIdNome(animal_id, nome) {
        // pegando servico por id e pelo nome
        return await this.prisma.servicos.findFirst({
            where: {
                animal_id,
                nome
            }
        })
    }

    async selectServicosPorId(id){
        // pegando o servico pelo id
        return await this.prisma.servicos.findFirst({
            where:{
                id
            }
        })
    }

    async insertServicos(data) {
        // criando novo servico
        return await this.prisma.servicos.create({
            data: {
                animal_id: data.animal_id,
                nome: data.nome
            }
        })
    }

    async updateServicos(id, data) {
        // atualizando o nome do servico
        return await this.prisma.servicos.update({
            where: {
                id
            },
            data: {
                nome: data.nome
            }
        })
    }

    async deleteServicos(id){
        return await this.prisma.$transaction(async (prismaTx) => {
            
            // excluindo todas entidades que tem relacionamento com servico
            await prismaTx.empresas_servicos.deleteMany({
                where:{
                    servico_id: id
                }
            })

            // excluindo o servico
            await  prismaTx.servicos.delete({
                where:{
                    id:id
                }
            })
        })
    }



}

module.exports = new ServicosRepository()