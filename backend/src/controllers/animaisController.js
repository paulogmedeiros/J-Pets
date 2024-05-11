const animaisService = require("../services/animaisService.js")
const filtroExcecoes = require("../exception/exceptionFilter.js")

class AnimaisController {

    async getAnimais(req, res) {
        try {
            const result = await animaisService.findAnimais();
            res.status(200).json(result)
        } catch (error) {
            const retorno = filtroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

}

module.exports = new AnimaisController()