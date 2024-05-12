const { PrismaClient } = require('@prisma/client');
class ModelosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectModelos(){
       return await this.prisma.modelos.findMany({
        select:{
            id:true,
            nome:true,
            marcas:{
                select:{
                    id:true,
                    nome:true
                }
            }
        }
       })
    }

    async selectModelosPorIdNome(marca_id,nome){
        // pegando modelo por id e pelo nome
        return await this.prisma.modelos.findFirst({
            where: {
                marca_id,
                nome
            }
        })
    }

    async selectModelosPorId(id) {
        return await this.prisma.modelos.findFirst({
            where: {
                id
            }
        })
    }

    async insertModelos(data) {
        // criando novo modelo
        return await this.prisma.modelos.create({
            data:{
                marca_id: data.marca_id,
                nome: data.nome
            }
        })
    }

    async updateModelos(id, data) {
        // atualizando o nome do modelo
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

            // excluindo todas entidades que tem relacionamento com marcas

            await prismaTx.empresas_modelos.deleteMany({
                where:{
                    modelo_id:id
                }
            })

            await prismaTx.modelos.delete({
                where:{
                    id
                }
            })
        })
    }
}

module.exports = new ModelosRepository()