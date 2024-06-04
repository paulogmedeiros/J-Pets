const EmpresasServicosService = require("../services/empresasServicosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasServicosController {

    async getEmpresasSevicoPorIdEmpresaIdAnimal(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const animalId = parseInt(req.params.animalId)
            const result = await EmpresasServicosService.findEmpresasSevicoPorIdEmpresaIdAnimal(empresaId,animalId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getEmpresasSevicoPorIdEmpresa(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const result = await EmpresasServicosService.findEmpresasSevicoPorIdEmpresa(empresaId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

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

    async deleteEmpresasSevico(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const data = req.body;
            await EmpresasServicosService.removeEmpresasServicos(empresaId, data);
            res.status(200).json({ mensage: "Servicos deletados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

}

module.exports = new EmpresasServicosController()