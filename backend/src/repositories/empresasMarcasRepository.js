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

    // async insertEmpresasServicosEEmpresaAnimal(data) {
    //     return await this.prisma.$transaction(async (prismaTx) => {
    //         await prismaTx.empresas_animais.create({
    //             data: {
    //                 animal_id: data.animalId,
    //                 empresa_id: data.empresaId
    //             }
    //         })
    //         for (const servicoId of data.servicosId) {
    //             await prismaTx.empresas_servicos.create({
    //                 data: {
    //                     empresa_id: data.empresaId,
    //                     servico_id: servicoId
    //                 }
    //             })
    //         }
    //     })
    // }

    // async deleteEmpresasServicos(empresaId, data) {
    //     return await this.prisma.$transaction(async (prismaTx) => {
    //         for (const servicoId of data.servicosId) {
    //             await prismaTx.empresas_servicos.deleteMany({
    //                 where: {
    //                     empresa_id: empresaId,
    //                     servico_id: servicoId
    //                 }
    //             })
    //         }

    //         const servico = await prismaTx.empresas_servicos.findFirst({
    //             where: {
    //                 empresa_id: empresaId
    //             }
    //         })

    //         if (!servico) {
    //             await prismaTx.empresas_animais.deleteMany({
    //                 where: {
    //                     animal_id: data.animalId,
    //                     empresa_id: empresaId
    //                 }
    //             })
    //         }
    //     })
    // }

}

module.exports = new EmpresasMarcasRepository()