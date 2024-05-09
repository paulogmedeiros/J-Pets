const empresasService = require("../services/empresasService.js")
const filtroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasController {
    async postEmpresa(req, res) {
        try {
            const data = req.body;
            const result = await empresasService.createEmpresas(data);
            res.json(result)
        } catch (error) {
            const retorno = filtroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getEmpresas(req, res) {
        const result = await empresasService.findEmpresas();
        res.json(result)
    }
}

module.exports = new EmpresasController()