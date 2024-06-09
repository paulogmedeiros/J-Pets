const MarcasService = require("../services/marcasService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class MarcasController {

    async getMarcas(req, res) {
        try {
            const result = await MarcasService.findMarcas();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
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
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getMarcasPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const result = await MarcasService.findMarcasPorId(id);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getMarcasPorIdProduto(req, res) {
        try {
            const param = parseInt(req.params.produtoId)
            const result = await MarcasService.findMarcasPorIdProduto(param);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async postMarcas(req, res) {
        try {
            const body = req.body;
            await MarcasService.createMarcas(body);
            res.status(201).json({ message: "Marca cadastrada com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putMarcas(req,res){
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await MarcasService.editMarcas(param, body);
            res.status(200).json({ message: "Marca atualizada com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async deleteMarcas(req,res){
        try {
            const param = parseInt(req.params.id)
            await MarcasService.removeMarcas(param);
            res.status(200).json({ message: "Marca deletada com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }
}

module.exports = new MarcasController()