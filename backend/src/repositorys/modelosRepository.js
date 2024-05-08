const { PrismaClient } = require('@prisma/client');
class ModelosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async insertModelos(data) {
        return await this.prisma.modelos.create({
            data:{
                marca_id: data.marca_id,
                nome: data.nome
            }
        })
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
}

module.exports = new ModelosRepository()