const { PrismaClient } = require('@prisma/client');
class EmpresasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno todas as empresas
    async selectEmpresas(){
        return await this.prisma.empresas.findMany({
            select:{
                id: true,
                nome_fantasia:true,
                status_pagamento:true
            }
        })
    }

    // retorno a empresa que tem esse cnpj
    async selectEmpresaPorCNPJ(cnpj){
        return await this.prisma.empresas.findFirst({
            where:{
                cnpj:cnpj
            }
        })
    }

    // retorno a empresa que tem esse nome fantasia
    async selectEmpresaPorNomeFantasia(nomeFantasia){
        return await this.prisma.empresas.findFirst({
            where:{
                nome_fantasia:nomeFantasia
            }
        })
    }
    
    // criando nova empresa
    async insertEmpresas(data) {

        return await this.prisma.$transaction(async (prismaTx) => {
            const login = await prismaTx.login.create({
                data: {
                    email: data.email,
                    senha: data.senha,
                    tipo: 'EMP',
                }
            })
    
            await prismaTx.empresas.create({
                data:{
                  cnpj: data.cnpj,
                  nome_fantasia: data.nomeFantasia,
                  login_id: login.id,
                }
            })
        })

    }
}

module.exports = new EmpresasRepository()