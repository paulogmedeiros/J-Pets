const { PrismaClient } = require('@prisma/client');

class EmpresasAnimaisRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // coletando todas os animais trabalhados pela empresa e pelo animal
    async selectEmpresasAnimaisPorEmpresaIdEAnimalId(data) {
        return await this.prisma.empresas_animais.findFirst({
            where: {
                animal_id: data.animalId,
                empresa_id: data.empresaId
            }
        })
    }

    async selectEmpresasAnimaisPorIdEmpresa(empresaId) {
        return await this.prisma.empresas_animais.findMany({
            where: {
                empresa_id: empresaId,
            },
            select: {
                animal_id: true,
                animais: {
                    select: {
                        nome: true
                    }
                }
            }

        })
    }


}

module.exports = new EmpresasAnimaisRepository()