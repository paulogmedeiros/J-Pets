const { PrismaClient } = require('@prisma/client');
class ProdutosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectProdutos() {
        // pegando todos os produtos
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

    async selectProdutosPorIdNome(animal_id, nome) {
        // pegando produtos por id e pelo nome
        return await this.prisma.produtos.findFirst({
            where: {
                animal_id,
                nome
            }
        })
    }

    async selectProdutosPorIdAnimal(animalId) {
        // pegando produto que tenha o animal_id escolhido
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

    async selectProdutosPorId(id) {
        // pegando o produto pelo id
        return await this.prisma.produtos.findFirst({
            where: {
                id
            }
        })
    }

    async insertProdutos(data) {
        // criando novo produto
        return await this.prisma.produtos.create({
            data: {
                animal_id: data.animal_id,
                nome: data.nome
            }
        })
    }

    async updateProdutos(id, data) {
        // atualizando o nome do produto
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

            // excluindo todas entidades que tem relacionamento com produtos

            // coleto todas as marcas associadas ao produto
            const marcas = await prismaTx.marcas.findMany({
                where: {
                    produto_id: id
                }
            })

            for (const marca of marcas) {

                const modelos = await prismaTx.modelos.findMany({
                    where: {
                        marca_id: marca.id
                    }
                })

                for (const modelo of modelos) {
                    await prismaTx.empresas_modelos.deleteMany({
                        where: {
                            modelo_id: modelo.id
                        }
                    })
                }

                await prismaTx.modelos.deleteMany({
                    where: {
                        marca_id: marca.id
                    }
                })

                await prismaTx.empresas_marcas.deleteMany({
                    where: {
                        marca_id: marca.id
                    }
                })

            }

            await prismaTx.marcas.deleteMany({
                where: {
                    produto_id: id
                }
            })

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