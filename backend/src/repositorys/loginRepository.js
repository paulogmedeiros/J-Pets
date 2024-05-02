const { PrismaClient } = require('@prisma/client');

class LoginRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async selectLogar(data) {
        return await this.prisma.login.findFirst({
            where:{
                email:data.email
            }
        })
    }

}

module.exports = new LoginRepository()