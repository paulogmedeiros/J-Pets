const { PrismaClient } = require('@prisma/client');

class ServicosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno todos os servicos
    async selectServicos() {
        return await this.prisma.servicos.findMany({
            select: {
                id: true,
                nome: true,
                animal_id: true,
                animais: {
                    select: {
                        id: true,
                        nome: true,
                    }
                }
            }
        });
    }
    
    // retorno todos os servicos pelo id do animal relacionado e da empresa
    async selectServicosPorIdAnimalIdEmpresa(animalId, empresaId) {
        return await this.prisma.servicos.findMany({
            where: {
                animal_id: animalId,
                empresas_servicos: {
                  none: {
                    empresa_id: empresaId,
                  },
                },
              },
        })
    }

    // retorno servico por id e pelo nome
    async selectSevicosPorIdNome(animal_id, nome) {
        return await this.prisma.servicos.findFirst({
            where: {
                animal_id,
                nome
            }
        })
    }

    // retorno o servico pelo id
    async selectServicosPorId(id) {
        return await this.prisma.servicos.findFirst({
            where: {
                id
            }
        })
    }

    // criando novo servico
    async insertServicos(data) {
        return await this.prisma.servicos.create({
            data: {
                animal_id: data.animal_id,
                nome: data.nome
            }
        })
    }

    // atualizando o nome do servico
    async updateServicos(id, data) {
        return await this.prisma.servicos.update({
            where: {
                id
            },
            data: {
                nome: data.nome
            }
        })
    }

    // excluindo o servico
    async deleteServicos(id) {
        return await this.prisma.$transaction(async (prismaTx) => {

            // excluindo todas entidades que tem relacionamento com servico
            await prismaTx.empresas_servicos.deleteMany({
                where: {
                    servico_id: id
                }
            })

            // excluindo o servico
            await prismaTx.servicos.delete({
                where: {
                    id: id
                }
            })
        })
    }

}

module.exports = new ServicosRepository()