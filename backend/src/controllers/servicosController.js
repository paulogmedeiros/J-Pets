const ServicosService = require("../services/servicoService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class ServicosController {

    async getServicos(req, res) {
        try {
            const result = await ServicosService.findServicos();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getServicosPorIdAnimalIdEmpresa(req, res) {
        try {
            const animalId = parseInt(req.params.animalId)
            const empresaId = parseInt(req.params.empresaId)
            const result = await ServicosService.findServicosPorIdAnimalIdEmpresa(animalId,empresaId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getServicosPorIdAnimal(req, res) {
        try {
            const animalId = parseInt(req.params.animalId)
            const result = await ServicosService.findServicosPorIdAnimal(animalId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getServicosPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const result = await ServicosService.findServicosPorId(id);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }


    async postServicos(req, res) {
        try {
            const body = req.body
            body.animal_id = parseInt(body.animal_id)
            await ServicosService.createServicos(body);
            res.status(201).json({ mensage: "Serviço cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.mensage})
        }
    }

    async putServicos(req, res) {
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await ServicosService.editServicos(param, body);
            res.status(200).json({ mensage: "Serviço atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async deleteServicos(req, res) {
        try {
            const param = parseInt(req.params.id)
            await ServicosService.removeServicos(param);
            res.status(200).json({ mensage: "Serviço deletado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }
}

module.exports = new ServicosController()