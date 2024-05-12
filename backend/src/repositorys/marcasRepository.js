const { PrismaClient } = require('@prisma/client');
class MarcasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

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

    async selectMarcasPorIdProduto(produtoId) {
        // pegando produtos por id e pelo nome
        return await this.prisma.marcas.findMany({
            where: {
                produto_id: produtoId
            }
        })
    }

    async selectMarcasPorIdNome(produto_id, nome) {
        return await this.prisma.marcas.findFirst({
            where: {
                produto_id,
                nome
            }
        })
    }

    async selectMarcasPorId(id) {
        return await this.prisma.marcas.findFirst({
            where: {
                id
            }
        })
    }

    async insertMarcas(data) {
        // criando nova marca
        return await this.prisma.marcas.create({
            data: {
                produto_id: data.produto_id,
                nome: data.nome
            }
        })
    }

    async updateMarcas(id, data) {
        // atualizando o nome da marca
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

            // excluindo todas entidades que tem relacionamento com a marca

            // coleto todas os modelos associadas ao produto
            const modelos = await prismaTx.modelos.findMany({
                where: {
                    marca_id: id
                }
            })

            for(const modelo of modelos){
                await prismaTx.empresas_modelos.deleteMany({
                    where:{
                        modelo_id:modelo.id
                    }
                })
            }

            await prismaTx.modelos.deleteMany({
                where:{
                    marca_id: id
                }
            })

            await prismaTx.empresas_marcas.deleteMany({
                where:{
                    marca_id:id
                }
            })

            await prismaTx.marcas.delete({
                where:{
                    id
                }
            })
        })
    }

}

module.exports = new MarcasRepository()