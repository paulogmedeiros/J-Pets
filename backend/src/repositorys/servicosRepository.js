const { PrismaClient } = require('@prisma/client');
class ServicosRepository{

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectServico(){
        return await this.prisma.servicos.findMany({
            select:{
                nome:true,
                animais:{
                    select:{
                        nome:true,
                    }
                }
            }
        });
    }
}

module.exports = new ServicosRepository()