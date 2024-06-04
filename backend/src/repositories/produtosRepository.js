const { PrismaClient } = require('@prisma/client');
class ProdutosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno todos os produtos
    async selectProdutos() {
        return await this.prisma.produtos.findMany({
            select: {
                id: true,
                nome: true,
                animal_id: true,
                animais: {
                    select: {
                        id: true,
                        nome: true
                    }
                }
            }
        })
    }

    async selectProdutosPorIdAnimalIdEmpresa(animalId, empresaId) {
        return await this.prisma.produtos.findMany({
            where: {
                animal_id: animalId,
                empresas_produtos: {
                  none: {
                    empresa_id: empresaId,
                  },
                },
              },
        })
    }

    // retorno produto por id e pelo nome
    async selectProdutosPorIdNome(animal_id, nome) {
        return await this.prisma.produtos.findFirst({
            where: {
                animal_id,
                nome
            }
        })
    }

    // retorno produto que tenha o animal_id escolhido
    async selectProdutosPorIdAnimal(animalId) {
        return await this.prisma.produtos.findMany({
            where: {
                animal_id: animalId
            },
            select: {
                id: true,
                nome: true,
                animal_id: true
            }
        })
    }

    // retorno o produto pelo id
    async selectProdutosPorId(id) {
        return await this.prisma.produtos.findFirst({
            where: {
                id
            }
        })
    }

    // criando novo produto
    async insertProdutos(data) {
        return await this.prisma.produtos.create({
            data: {
                animal_id: data.animal_id,
                nome: data.nome
            }
        })
    }

    // atualizando o nome do produto
    async updateProdutos(id, data) {
        return await this.prisma.produtos.update({
            where: {
                id
            },
            data: {
                nome: data.nome
            }
        })
    }

    async deleteProdutos(id) {
        return await this.prisma.$transaction(async (prismaTx) => {

            /** excluindo todas entidades que tem relacionamento com produtos */

            // coletando todas as marcas associadas ao produto
            const marcas = await prismaTx.marcas.findMany({
                where: {
                    produto_id: id
                }
            })

            for (const marca of marcas) {

                // coletando todos os modelos associadas a marca
                const modelos = await prismaTx.modelos.findMany({
                    where: {
                        marca_id: marca.id
                    }
                })
                // excluindo tabelas relacionadas com modelo
                for (const modelo of modelos) {
                    await prismaTx.empresas_modelos.deleteMany({
                        where: {
                            modelo_id: modelo.id
                        }
                    })
                }
                // excluindo todos os modelo associados a marca
                await prismaTx.modelos.deleteMany({
                    where: {
                        marca_id: marca.id
                    }
                })
                // excluindo outra tabelas relacionadas a marca
                await prismaTx.empresas_marcas.deleteMany({
                    where: {
                        marca_id: marca.id
                    }
                })

            }
            // excluindo marca
            await prismaTx.marcas.deleteMany({
                where: {
                    produto_id: id
                }
            })
            // excluindo tabela relacionada com produto
            await prismaTx.empresas_produtos.deleteMany({
                where: {
                    produto_id: id
                }
            })

            // excluindo o produtos
            await prismaTx.produtos.delete({
                where: {
                    id: id
                }
            })
        })
    }

}

module.exports = new ProdutosRepository()