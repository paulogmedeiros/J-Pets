const { ExcecaoGenericaDeErro } = require('./customExceptions')

class FiltroExcecoes {

    tratarErro(erro) {
        switch (true) {
            case erro instanceof ExcecaoGenericaDeErro:
                return { message: erro.message, status: erro.status }
                break;
            default:
                return { message: 'Erro interno do servidor :(', status: 500 }
        }
    }

}

module.exports = new FiltroExcecoes()