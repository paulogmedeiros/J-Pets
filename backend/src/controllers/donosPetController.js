const DonosPetService = require("../services/donosPetService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class DonosPetController {
    
    async postDonoPet(req, res) {
        try {
            const data = req.body;
            await DonosPetService.createDonoPet(data);
            res.status(201).json({ mensage: "Usuario cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }
}

module.exports = new DonosPetController()