const ModelosService = require("../services/modelosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class ModelosController{

    async getModelos(req,res){
        try {
            const result = await ModelosService.findModelos();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getModelosPorIdMarcaIdEmpresa(req, res) {
        try {
            const marcasId = parseInt(req.params.marcasId)
            const empresaId = parseInt(req.params.empresaId)
            const result = await ModelosService.findModelosPorIdMarcaIdEmpresa(marcasId,empresaId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getModelosPorIdMarca(req, res) {
        try {
            const marcasId = parseInt(req.params.marcasId)
            const result = await ModelosService.findModelosPorIdMarca(marcasId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }


    async getModelosPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const result = await ModelosService.findModelosPorId(id);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    // async getModelosPorIdEmpresa(req,res){
    //     try {
    //         const param = parseInt(req.params.empresaId)
    //         const result = await ModelosService.findModelosPorIdEmpresa(param);
    //         res.status(200).json(result)
    //     } catch (error) {
    //         const retorno = FiltroExcecoes.tratarErro(error)
    //         res.status(retorno.status).json(retorno.message)
    //     }
    // }

    async postModelos(req,res){
        try {
            const body = req.body
            await ModelosService.createModelos(body);
            res.status(201).json({ message: "Modelo cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putModelos(req,res){
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await ModelosService.editModelos(param, body);
            res.status(200).json({ message: "Modelo atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async deleteModelos(req,res){
        try {
            const param = parseInt(req.params.id)
            await ModelosService.removeModelos(param);
            res.status(200).json({ message: "Modelo deletado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

}

module.exports = new ModelosController()