const CartoesService = require("../services/cartoesService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class CartoesController {

    async postCartoes(req, res) {
        try {
            const data = req.body;
            const param = parseInt(req.params.empresaId)
            await CartoesService.createCartoes(param,data);
            res.status(201).json({message:"Transação realizada com sucesso"})
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

}

module.exports = new CartoesController()