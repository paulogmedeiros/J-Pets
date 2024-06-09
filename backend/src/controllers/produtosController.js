const ProdutosService = require("../services/produtosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class ProdutosController {
    async getProdutos(req, res) {
        try {
            const result = await ProdutosService.findProdutos();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getProdutosPorIdAnimalIdEmpresa(req, res) {
        try {
            const animalId = parseInt(req.params.animalId)
            const empresaId = parseInt(req.params.empresaId)
            const result = await ProdutosService.findProdutosPorIdAnimalIdEmpresa(animalId,empresaId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getProdutosPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const result = await ProdutosService.findProdutosPorId(id);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getProdutosPorIdAnimal(req, res) {
        try {
            const param = parseInt(req.params.animalId)
            const result = await ProdutosService.findProdutosPorIdAnimal(param);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async postProdutos(req,res){
        try {
            const body = req.body
            await ProdutosService.createProdutos(body);
            res.status(201).json({ message: "Produto cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putProdutos(req,res){
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await ProdutosService.editProdutos(param, body);
            res.status(200).json({ message: "Produto atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async deleteProdutos(req,res){
        try {
            const param = parseInt(req.params.id)
            await ProdutosService.removeProdutos(param);
            res.status(200).json({ message: "Produto deletado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

}

module.exports = new ProdutosController()