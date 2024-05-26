const EmpresasServicosService = require("../services/empresasServicosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasServicosController {


    async postEmpresasSevico(req, res) {
        try {
            const data = req.body;
            await EmpresasServicosService.createEmpresasServicos(data);
            res.status(201).json({ mensage: "Servicos cadastrados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    
}

module.exports = new EmpresasServicosController()