const { PrismaClient } = require('@prisma/client');

class EmpresasMarcasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }


    async selectEmpresasMarcasPorIdEmpresaIdAnimal(empresaId, animalId) {
        return await this.prisma.empresas_marcas.findMany({
            where: {
                empresa_id: empresaId,
                marcas:{
                    produtos:{
                        animal_id: animalId
                    }
                }
            },
            select: {
                marca_id: true,
                marcas:{
                    select:{
                        nome:true
                    }
                }
            }
        })
    }

    async selectEmpresasMarcasPorIdEmpresaIdProduto(empresaId, produtoId) {
        return await this.prisma.empresas_marcas.findMany({
            where: {
                empresa_id: empresaId,
                marcas:{
                    produto_id: produtoId
                }
            },
            select: {
                marca_id: true,
                marcas:{
                    select:{
                        nome:true
                    }
                }
            }
        })
    }

    async insertEmpresasMarcas(data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            for (const marcaId of data.marcasId) {
                await prismaTx.empresas_marcas.create({
                    data: {
                        empresa_id: data.empresaId,
                        marca_id: marcaId
                    }
                })
            }
        })
    }

    async deleteEmpresasMarcas(empresaId, data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            for (const marcaId of data.marcasId) {
                await prismaTx.empresas_marcas.deleteMany({
                    where: {
                        empresa_id: empresaId,
                        marca_id: marcaId
                    }
                })
                await prismaTx.empresas_modelos.deleteMany({
                    where: {
                        empresa_id: empresaId,
                        modelo_id: {
                            in: (
                                await prismaTx.modelos.findMany({
                                    where: {
                                        marca_id: marcaId
                                    },
                                    select: { id: true }
                                })
                            ).map(modelo => modelo.id)
                        }
                    }
                });
            }
        })
    }

}

module.exports = new EmpresasMarcasRepository()