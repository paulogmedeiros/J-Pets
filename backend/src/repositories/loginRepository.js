const { PrismaClient } = require('@prisma/client');

class LoginRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectLogarPorEmail(email) {
        return await this.prisma.login.findFirst({
            where:{
                email:email
            }
        })
    }

    async selectAdministradorPorId(id){
        return await this.prisma.login.findFirst({
            where:{
                id:id
            },
            select:{
                email:true,
            }
        })
    }

    async selectUsuarioPorId(id){
        return await this.prisma.login.findFirst({
            where:{
                id:id
            },
        })
    }

    async insertAdministrador(data) {
        return await this.prisma.login.create({
            data:{
                email: data.email,
                senha: data.senha,
                tipo: 'ADM',
            }
        })
    }

    async updateSenhaRecuperacao(data, id) {
        return await this.prisma.login.update({
            where: {
                id
            },
            data: {
                senha: data.senha
            }
        })
    }

    async updateSenha(data, id) {
        return await this.prisma.login.update({
            where: {
                id
            },
            data: {
                senha: data.senha
            }
        })
    }

}

module.exports = new LoginRepository()