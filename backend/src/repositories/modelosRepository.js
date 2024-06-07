const { PrismaClient } = require('@prisma/client');
class ModelosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno todos os modelos
    async selectModelos() {
        return await this.prisma.modelos.findMany({
            select: {
                id: true,
                nome: true,
                marcas: {
                    select: {
                        id: true,
                        nome: true
                    }
                }
            }
        })
    }

    async selectModelosPorIdMarcaIdEmpresa(marcaId, empresaId) {
        console.log(marcaId,empresaId)
        return await this.prisma.modelos.findMany({
            where: {
                marca_id: marcaId,
                empresas_modelos: {
                    none: {
                        empresa_id: empresaId,
                    },
                },
            },
        })
    }


    // async selectModelosPorIdEmpresa(empresaId) {
    //     return await this.prisma.modelos.findMany({
    //         where: {
    //             empresas_modelos: {
    //                 some: {
    //                     empresa_id: empresaId
    //                 }
    //             }
    //         }, select: {
    //             id: true,
    //             nome: true,
    //             marcas: {
    //                 select: {
    //                     id: true,
    //                     nome: true,
    //                     produtos: {
    //                         select: {
    //                             id: true,
    //                             nome: true,
    //                             animais: {
    //                                 select: {
    //                                     id: true,
    //                                     nome: true
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     })
    // }


    // retorno modelo por id e pelo nome
    async selectModelosPorIdNome(marca_id, nome) {
        return await this.prisma.modelos.findFirst({
            where: {
                marca_id,
                nome
            }
        })
    }

    // retorno modelos por id
    async selectModelosPorId(id) {
        return await this.prisma.modelos.findFirst({
            where: {
                id
            }
        })
    }

    // criando novo modelo
    async insertModelos(data) {
        return await this.prisma.modelos.create({
            data: {
                marca_id: data.marca_id,
                nome: data.nome
            }
        })
    }

    // atualizando o nome do modelo
    async updateModelos(id, data) {
        return await this.prisma.modelos.update({
            where: {
                id
            },
            data: {
                nome: data.nome
            }
        })
    }

    async deleteModelos(id) {
        return await this.prisma.$transaction(async (prismaTx) => {
            // excluindo tabelas relacionadas com modelo
            await prismaTx.empresas_modelos.deleteMany({
                where: {
                    modelo_id: id
                }
            })
            // excluindo modelo
            await prismaTx.modelos.delete({
                where: {
                    id
                }
            })
        })
    }
}

module.exports = new ModelosRepository()