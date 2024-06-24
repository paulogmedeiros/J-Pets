const CartoesRepository = require("../repositories/cartoesRepository.js")
const {ExcecaoGenericaDeErro} =  require('../exception/customExceptions.js')

class CartoesService{
  
    async createCartoes(id,data){
        // valido se o cartão já existe o registro
        const cartao =  await CartoesRepository.selectCartoes(data)
        if (!cartao) {
            throw new ExcecaoGenericaDeErro("Informações do cartão não encontrada em nossa base de dados")
        }
        // valido se empresa já está fazendo a assinatura
        const empresa = await CartoesRepository.selectEmpresas(id)
        if(empresa.status_pagamento){
            throw new ExcecaoGenericaDeErro("Sua assinatura já está feita!!!!")
        }
        // valido se o valor do cartão está de acordo
        if(cartao.valor_conta < 200.00){
            throw new ExcecaoGenericaDeErro("Saldo insuficiente para realizar operação")
        }else{
            cartao.valor_conta = cartao.valor_conta - 200.00
            // altero o novo valor do cartão
            await CartoesRepository.updateValorCartao(cartao.id,cartao.valor_conta)
            // altero o status de pagamento da empresa
            await CartoesRepository.updateStatusPagamento(id)
        }
    }
}

module.exports = new CartoesService()