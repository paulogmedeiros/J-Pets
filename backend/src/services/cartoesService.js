const CartoesRepository = require("../repositories/cartoesRepository.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')

class CartoesService{
  
    async createCartoes(id,data){
        // valido se o cartão já existe o registro
        const cartao =  await CartoesRepository.selectCartoes(data)
        if (!cartao) {
            throw new ExcecaoIdNaoEncontrado("Informações do cartão não encontrada em nossa base de dados")
        }
        // valido se o valor do cartão está de acordo
        if(cartao.valor_conta < 200.00){
            throw new ExcecaoIdNaoEncontrado("Saldo insuficiente para realizar operação")
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