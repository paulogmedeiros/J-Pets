const ServicosService = require("../services/servicoService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class ServicosController {

    async getServicos(req, res) {
        try {
            const result = await ServicosService.findServicos();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
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
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getServicosPorIdAnimal(req, res) {
        try {
            const animalId = parseInt(req.params.animalId)
            const result = await ServicosService.findServicosPorIdAnimal(animalId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getServicosPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const result = await ServicosService.findServicosPorId(id);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }


    async postServicos(req, res) {
        try {
            const body = req.body
            body.animal_id = parseInt(body.animal_id)
            await ServicosService.createServicos(body);
            res.status(201).json({ message: "Serviço cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putServicos(req, res) {
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await ServicosService.editServicos(param, body);
            res.status(200).json({ message: "Serviço atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async deleteServicos(req, res) {
        try {
            const param = parseInt(req.params.id)
            await ServicosService.removeServicos(param);
            res.status(200).json({ message: "Serviço deletado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }
}

module.exports = new ServicosController()