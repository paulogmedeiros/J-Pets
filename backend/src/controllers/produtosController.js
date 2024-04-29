const service = require("../services/produtosService.js")

class ProdutosController{
    async postProdutos(req,res){
        const data = req.body;
        const result = await service.createProdutos(data);
        res.json(result)
    }

    async getProdutos(req,res){
        const result = await service.findProdutos();
        res.json(result)
    }

    async getProdutosMarcaModelos(req,res){
        const result = await service.findProdutosMarcaModelos();
        res.json(result)
    }
}

module.exports = new ProdutosController()