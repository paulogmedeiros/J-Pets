const EmpresasService = require("../services/empresasService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasController {
    async getEmpresas(req, res) {
        try {
            const result = await EmpresasService.findEmpresas();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async postEmpresa(req, res) {
        try {
            const data = req.body;
            await EmpresasService.createEmpresas(data);
            res.status(201).json({ mensage: "Empresa cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }
}

module.exports = new EmpresasController()