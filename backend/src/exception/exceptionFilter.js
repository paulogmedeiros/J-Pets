const { ExcecaoIdNaoEncontrado } = require('./customExceptions')

class FiltroExcecoes {

    tratarErro(erro) {
        switch (true) {
            case erro instanceof ExcecaoIdNaoEncontrado:
                return { mensage: erro.message, status: erro.status }
                break;
            default:
                return { mensage: 'Erro interno do servidor :(', status: 500 }
        }
    }

}

module.exports = new FiltroExcecoes()