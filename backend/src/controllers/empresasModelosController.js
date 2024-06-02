const EmpresasModelosService = require("../services/empresasModelosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasModelosController {

    async getEmpresasModelosPorIdEmpresaIdMarca(req, res) {
        try {
            const marcaId = parseInt(req.params.marcaId)
            const empresaId = parseInt(req.params.empresaId)
            const result = await EmpresasModelosService.findEmpresasModelosPorIdEmpresaIdMarca(marcaId,empresaId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async postEmpresasModelos(req, res) {
        try {
            const data = req.body;
            await EmpresasModelosService.createEmpresasModelos(data);
            res.status(201).json({ mensage: "Modelos cadastrados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async deleteEmpresasModelos(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const data = req.body;
            await EmpresasModelosService.removeEmpresasModelos(empresaId, data);
            res.status(200).json({ mensage: "Modelos deletados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

}

module.exports = new EmpresasModelosController()