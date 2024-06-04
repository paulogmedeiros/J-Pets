const { PrismaClient } = require('@prisma/client');

class EmpresasModelosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }


    async selectEmpresasModelosPorIdEmpresaIdMarca(marcaId, empresaId) {
        return await this.prisma.empresas_modelos.findMany({
            where: {
                empresa_id: empresaId,
                modelos: {
                    marca_id: marcaId
                },
            },
            select: {
                modelo_id: true,
                modelos: {
                    select: {
                        nome: true
                    }
                }
            }
        })
    }

    async selectEmpresasModelosPorIdEmpresa(empresaId) {
        return await this.prisma.empresas_modelos.findMany({
            where: {
                empresa_id: empresaId
            },
            select: {
                modelos: {
                    select: {
                        id: true,
                        nome: true,
                        marcas: {
                            select: {
                                id: true,
                                nome: true,
                                produtos: {
                                    select: {
                                        id: true,
                                        nome: true,
                                        animais: {
                                            select: {
                                                id: true,
                                                nome: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }

    async insertEmpresasModelos(data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            for (const modeloId of data.modelosId) {
                await prismaTx.empresas_modelos.create({
                    data: {
                        empresa_id: data.empresaId,
                        modelo_id: modeloId,
                        estoque: true
                    }
                })
            }
        })
    }

    async deleteEmpresasModelos(empresaId, data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            for (const modeloId of data.modelosId) {
                await prismaTx.empresas_modelos.deleteMany({
                    where: {
                        empresa_id: empresaId,
                        modelo_id: modeloId
                    }
                })
            }
        })
    }

}

module.exports = new EmpresasModelosRepository()