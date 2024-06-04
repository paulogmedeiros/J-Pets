const { PrismaClient } = require('@prisma/client');
class EmpresasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno todas as empresas
    async selectEmpresas() {
        return await this.prisma.empresas.findMany({
            select: {
                id: true,
                nome_fantasia: true,
                status_pagamento: true
            }
        })
    }

    // retorno a empresa que tem esse cnpj
    async selectEmpresaPorCNPJ(cnpj) {
        return await this.prisma.empresas.findFirst({
            where: {
                cnpj: cnpj
            }
        })
    }

    async selectCupom(id) {
        return await this.prisma.empresas.findFirst({
            where: {
                id: id
            },
            select: {
                nome_cupom: true
            }
        })
    }

    // retorno a empresa que tem esse nome fantasia
    async selectEmpresaPorNomeFantasia(nomeFantasia) {
        return await this.prisma.empresas.findFirst({
            where: {
                nome_fantasia: nomeFantasia
            }
        })
    }

    async selectEmpresasPorId(id) {
        return await this.prisma.empresas.findFirst({
            where: {
                id
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
                data: {
                    cnpj: data.cnpj,
                    nome_fantasia: data.nomeFantasia,
                    login_id: login.id,
                }
            })
        })

    }

    async updateCriarCupom(data, id) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                porcentagem_cupom: data.porcentagemCupom,
                nome_cupom: data.nomeCupom
            },
            select: {
                nome_cupom: true
            }
        })
    }

    async updateExcluirCupom(id) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                porcentagem_cupom: null,
                nome_cupom: null
            },
            select: {
                nome_cupom: true
            }
        })
    }

    async updateEmpresasImagem(id,foto_perfil) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                foto_perfil
            }
        })
    }
}

module.exports = new EmpresasRepository()