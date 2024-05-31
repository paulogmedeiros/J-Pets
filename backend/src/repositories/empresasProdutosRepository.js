const { PrismaClient } = require('@prisma/client');

class EmpresasServicosRepository {

    constructor() {
        this.prisma = new PrismaClient();
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


}

module.exports = new EmpresasServicosRepository()