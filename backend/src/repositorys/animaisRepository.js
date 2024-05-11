const { PrismaClient } = require('@prisma/client');
class AnimaisRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectAnimais() {
        return await this.prisma.animais.findMany({
            select: {
                id: true,
                nome: true
            }
        })
    }

    async selectAnimalPorId(id) {
        return await this.prisma.animais.findFirst({
            where: {
                id
            }
        })
    }

}

module.exports = new AnimaisRepository()