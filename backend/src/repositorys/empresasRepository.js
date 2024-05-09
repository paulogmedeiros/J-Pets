const { PrismaClient } = require('@prisma/client');
class EmpresasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async insertEmpresas(data) {

        const login = await this.prisma.login.create({
            data: {
                email: data.email,
                senha: data.senha,
                tipo: 'EMP',
            }
        })

        await this.prisma.empresas.create({
            data:{
              cnpj: data.cnpj,
              nome_fantasia: data.nome_fantasia,
              login_id: login.id,
              status_empresa: false
            }
        })

        return await this.prisma.login.findUnique({
            where:{
                id:login.id,
            },
            select:{
                id: true,
                email: true,
                senha: true,
                tipo: true,
                empresas:{
                    select:{
                        cnpj:true,
                        nome_fantasia: true,
                    }
                }
            }
        })

    }

    async selectEmpresas(){
        return await this.prisma.empresas.findMany({
            select:{
                id: true,
                nome_fantasia:true,
                status_pagamento:true
            }
        })
    }
}

module.exports = new EmpresasRepository()