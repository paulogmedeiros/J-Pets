const { PrismaClient } = require('@prisma/client');
class AnimaisRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno todos os animais
    async selectAnimais() {
        return await this.prisma.animais.findMany({
            select: {
                id: true,
                nome: true
            }
        })
    }

    // retorno o animal com id especifico
    async selectAnimaisPorId(id) {
        return await this.prisma.animais.findFirst({
            where: {
                id
            }
        })
    }

}

module.exports = new AnimaisRepository()