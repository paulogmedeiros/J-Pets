const { PrismaClient } = require('@prisma/client');
class CartoesRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno o catão que se assemelha a informações do data
    async selectCartoes(data) {
        return await this.prisma.cartoes.findFirst({
            where:{
                cvv: data.cvv,
                data_vencimento: data.dataVencimento,
                nome_completo: data.nomeCompleto,
                numero_cartao: data.numeroCartao
            }
        })
    }

    async selectEmpresas(id){
        return await this.prisma.empresas.findFirst({
            where:{
                id
            }
        })
    }

    // atualizo o status de pagamento da empresa
    async updateStatusPagamento(id){
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                status_pagamento: true
            }
        })
    }

    // diminuo o valor do saldo do cartão
    async updateValorCartao(id,valor){
        return await this.prisma.cartoes.update({
            where: {
                id: id
            },
            data: {
                valor_conta: valor
            }
        })
    }

}

module.exports = new CartoesRepository()