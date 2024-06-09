const AnimaisService = require("../services/animaisService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class AnimaisController {

    async getAnimais(req, res) {
        try {
            const result = await AnimaisService.findAnimais();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

}

module.exports = new AnimaisController()