const EmpresasAnimaisService = require("../services/empresasAnimaisService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasAnimaisController {


    async getEmpresasAnimaisPorEmpresaIdEAnimalId(req, res) {
        try {
            const param = parseInt(req.params.empresaId)
            await EmpresasAnimaisService.findEmpresasAnimaisPorEmpresaIdEAnimalId(param);
            res.status(201).json({ mensage: "Animal cadastrados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    
}

module.exports = new EmpresasAnimaisController()