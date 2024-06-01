const { PrismaClient } = require('@prisma/client');

class EmpresasMarcasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }


    // async selectEmpresasSevicoPorIdEmpresa(empresaId) {
    //     return await this.prisma.empresas_servicos.findMany({
    //         where: {
    //             empresa_id: empresaId
    //         },
    //         select: {
    //             servico_id: true,
    //             servicos: {
    //                 select: {
    //                     nome: true,
    //                     animais: {
    //                         select: {
    //                             id: true,
    //                             nome: true
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     })
    // }

    // async insertEmpresasServicos(data) {
    //     return await this.prisma.$transaction(async (prismaTx) => {
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