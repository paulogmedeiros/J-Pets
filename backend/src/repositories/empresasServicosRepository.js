const { PrismaClient } = require('@prisma/client');

class EmpresasServicosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }


    async insertEmpresasServicos(data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            for (const servicoId of data.servicosId) {
                await prismaTx.empresas_servicos.create({
                    data: {
                        empresa_id: data.empresaId,
                        servico_id: servicoId
                    }
                })
            }
        })
    }

    async insertEmpresasServicosEEmpresaAnimal(data) {
        return await this.prisma.$transaction(async (prismaTx) => {
            await prismaTx.empresas_animais.create({
                data:{
                    animal_id: data.animalId,
                    empresa_id: data.empresaId
                }
            })
            for (const servicoId of data.servicosId) {
                await prismaTx.empresas_servicos.create({
                    data: {
                        empresa_id: data.empresaId,
                        servico_id: servicoId
                    }
                })
            }
        })
    }

}

module.exports = new EmpresasServicosRepository()