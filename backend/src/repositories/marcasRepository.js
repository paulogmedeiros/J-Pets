const { PrismaClient } = require('@prisma/client');
class MarcasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno todos as marcas
    async selectMarcas() {
        return await this.prisma.marcas.findMany({
            select: {
                id: true,
                nome: true,
                produto_id: true,
                produtos: {
                    select: {
                        id: true,
                        nome: true
                    }
                }
            }
        })
    }

    async selectMarcasPorIdProdutoIdEmpresa(produtoId, empresaId) {
        return await this.prisma.marcas.findMany({
            where: {
                produto_id: produtoId,
                empresas_marcas: {
                    none: {
                        empresa_id: empresaId,
                    },
                },
            },
        })
    }

    // retorno marcas pelo id do produto escolhido
    async selectMarcasPorIdProduto(produtoId) {
        return await this.prisma.marcas.findMany({
            where: {
                produto_id: produtoId
            }
        })
    }

    // retorno marca por id e pelo nome
    async selectMarcasPorIdNome(produto_id, nome) {
        return await this.prisma.marcas.findFirst({
            where: {
                produto_id,
                nome
            }
        })
    }

    // retorno marca por id
    async selectMarcasPorId(id) {
        return await this.prisma.marcas.findFirst({
            where: {
                id
            }
        })
    }

    // criando nova marca
    async insertMarcas(data) {
        return await this.prisma.marcas.create({
            data: {
                produto_id: data.produto_id,
                nome: data.nome
            }
        })
    }

    // atualizando o nome da marca
    async updateMarcas(id, data) {
        return await this.prisma.marcas.update({
            where: {
                id
            },
            data: {
                nome: data.nome
            }
        })
    }

    async deleteMarcas(id) {
        return await this.prisma.$transaction(async (prismaTx) => {

            /** excluindo todas entidades que tem relacionamento com marca */

            // coletando todos os modelos associadas a marca
            const modelos = await prismaTx.modelos.findMany({
                where: {
                    marca_id: id
                }
            })

            for (const modelo of modelos) {
                // excluindo tabelas relacionadas com modelo
                await prismaTx.empresas_modelos.deleteMany({
                    where: {
                        modelo_id: modelo.id
                    }
                })
            }

            // excluindo todos os modelo realcionados com a marca
            await prismaTx.modelos.deleteMany({
                where: {
                    marca_id: id
                }
            })
            // excluindo tabela relacionada com marca
            await prismaTx.empresas_marcas.deleteMany({
                where: {
                    marca_id: id
                }
            })
            // excluindo marca
            await prismaTx.marcas.delete({
                where: {
                    id
                }
            })
        })
    }

}

module.exports = new MarcasRepository()