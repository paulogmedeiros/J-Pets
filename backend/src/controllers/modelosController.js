const ModelosService = require("../services/modelosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class ModelosController{

    async getModelos(req,res){
        try {
            const result = await ModelosService.findModelos();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getModelosPorIdEmpresa(req,res){
        try {
            const param = parseInt(req.params.empresaId)
            const result = await ModelosService.findModelosPorIdEmpresa(param);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async postModelos(req,res){
        try {
            const body = req.body
            await ModelosService.createModelos(body);
            res.status(201).json({ mensage: "Modelo cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async putModelos(req,res){
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await ModelosService.editModelos(param, body);
            res.status(200).json({ mensage: "Modelo atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async deleteModelos(req,res){
        try {
            const param = parseInt(req.params.id)
            await ModelosService.removeModelos(param);
            res.status(200).json({ mensage: "Modelo deletado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

}

module.exports = new ModelosController()