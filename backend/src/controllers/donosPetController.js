const DonosPetService = require("../services/donosPetService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class DonosPetController {
    
    async postDonoPet(req, res) {
        try {
            const data = req.body;
            await DonosPetService.createDonoPet(data);
            res.status(201).json({ message: "Usuario cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async deleteDonoPetPorIdLogin(req,res){
        try {
            const param = parseInt(req.params.loginId)
            await DonosPetService.removeDonoPetPorIdLogin(param);
            res.status(201).json({ message: "Usuario excluido com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }
}

module.exports = new DonosPetController()