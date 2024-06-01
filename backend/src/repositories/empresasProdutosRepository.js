const { PrismaClient } = require('@prisma/client');

class EmpresasServicosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectEmpresasProdutosPorIdEmpresa(empresaId, animalId) {
        return await this.prisma.empresas_produtos.findMany({
            where: {
                empresa_id: empresaId,
                produtos: {
                    animal_id: animalId
                }
            },
            select: {
                produto_id: true,
                produtos: {
                    select: {
                        nome: true
                    }
                }
            }
        })
    }

    async insertEmpresasProdutos(data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            for (const produtoId of data.produtosId) {
                await prismaTx.empresas_produtos.create({
                    data: {
                        empresa_id: data.empresaId,
                        produto_id: produtoId
                    }
                })
            }
        })
    }

    async insertEmpresasProdutosEEmpresaAnimal(data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            await prismaTx.empresas_animais.create({
                data: {
                    animal_id: data.animalId,
                    empresa_id: data.empresaId
                }
            })
            for (const produtoId of data.produtosId) {
                await prismaTx.empresas_produtos.create({
                    data: {
                        empresa_id: data.empresaId,
                        produto_id: produtoId
                    }
                })
            }
        })
    }

    async deleteEmpresasProdutos(empresaId, data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            for (const produtoId of data.produtosId) {
                await prismaTx.empresas_produtos.deleteMany({
                    where: {
                        empresa_id: empresaId,
                        produto_id: produtoId
                    }
                })

                await prismaTx.empresas_marcas.deleteMany({
                    where: {
                        empresa_id: empresaId,
                        marca_id: {
                            in: (
                                await prismaTx.marcas.findMany({
                                    where: { produto_id: produtoId },
                                    select: { id: true }
                                })
                            ).map(marca => marca.id)
                        }
                    }
                });

                // Exclui registros da tabela empresas_modelos relacionados ao produto
                await prismaTx.empresas_modelos.deleteMany({
                    where: {
                        empresa_id: empresaId,
                        modelo_id: {
                            in: (
                                await prismaTx.modelos.findMany({
                                    where: {
                                        marcas: {
                                            produto_id: produtoId
                                        }
                                    },
                                    select: { id: true }
                                })
                            ).map(modelo => modelo.id)
                        }
                    }
                });

            }


            const produtos = await prismaTx.empresas_produtos.findFirst({
                where: {
                    empresa_id: empresaId
                }
            })

            if (!produtos) {
                await prismaTx.empresas_animais.deleteMany({
                    where: {
                        animal_id: data.animalId,
                        empresa_id: empresaId
                    }
                })
            }
        })
    }

}

module.exports = new EmpresasServicosRepository()