const { PrismaClient } = require('@prisma/client');
class MarcasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async insertMarcas(data) {
        return await this.prisma.marcas.create({
            data:{
                produto_id: data.produto_id,
                nome: data.nome
            }
        })
    }

    async selectMarcas(){
       return await this.prisma.marcas.findMany({
        select:{
            id:true,
            nome:true,
            produtos:{
                select:{
                    id:true,
                    nome:true
                }
            }
        }
       })
    }
}

module.exports = new MarcasRepository()