const { PrismaClient } = require('@prisma/client');
class ServicosRepository{

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectServico(){
        return await this.prisma.servicos.findMany({
            select:{
                id:true,
                nome:true,
                animais:{
                    select:{
                        id:true,
                        nome:true,
                    }
                }
            }
        });
    }
}

module.exports = new ServicosRepository()