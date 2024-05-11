const { PrismaClient } = require('@prisma/client');

class ServicosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectServico() {
        return await this.prisma.servicos.findMany({
            select: {
                id: true,
                nome: true,
                animais: {
                    select: {
                        id: true,
                        nome: true,
                    }
                }
            }
        });
    }

    async selectSevicoPorIdNome(animal_id, nome) {
        return await this.prisma.servicos.findFirst({
            where: {
                animal_id,
                nome
            }
        })
    }

    async insertServico(data) {
        return await this.prisma.servicos.create({
            data: {
                animal_id: data.animal_id,
                nome: data.nome
            }
        })
    }

    async update(id, data) {
        return await this.prisma.servicos.update({
            where: {
                id
            },
            data: {
                nome: data.nome
            }
        })
    }

}

module.exports = new ServicosRepository()