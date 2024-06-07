const MarcasService = require("../services/marcasService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class MarcasController {

    async getMarcas(req, res) {
        try {
            const result = await MarcasService.findMarcas();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }


    async getMarcasPorIdProdutoIdEmpresa(req, res) {
        try {
            const produtoId = parseInt(req.params.produtoId)
            const empresaId = parseInt(req.params.empresaId)
            const result = await MarcasService.findMarcasPorIdProdutoIdEmpresa(produtoId,empresaId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getMarcasPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const result = await MarcasService.findMarcasPorId(id);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getMarcasPorIdProduto(req, res) {
        try {
            const param = parseInt(req.params.produtoId)
            const result = await MarcasService.findMarcasPorIdProduto(param);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async postMarcas(req, res) {
        try {
            const body = req.body;
            await MarcasService.createMarcas(body);
            res.status(201).json({ mensage: "Marca cadastrada com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async putMarcas(req,res){
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await MarcasService.editMarcas(param, body);
            res.status(200).json({ mensage: "Marca atualizada com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async deleteMarcas(req,res){
        try {
            const param = parseInt(req.params.id)
            await MarcasService.removeMarcas(param);
            res.status(200).json({ mensage: "Marca deletada com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }
}

module.exports = new MarcasController()