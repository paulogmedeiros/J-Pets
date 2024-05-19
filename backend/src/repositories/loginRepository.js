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

    async insertAdministrador(data) {
        return await this.prisma.login.create({
            data:{
                email: data.email,
                senha: data.senha,
                tipo: 'ADM',
            }
        })
    }

}

module.exports = new LoginRepository()