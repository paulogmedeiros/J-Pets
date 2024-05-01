const produtosService = require("../services/produtosService.js")

class ProdutosController{
    async postProdutos(req,res){
        const data = req.body;
        const result = await produtosService.createProdutos(data);
        res.json(result)
    }

    async getProdutos(req,res){
        const result = await produtosService.findProdutos();
        res.json(result)
    }

    async getProdutosMarcaModelos(req,res){
        const result = await produtosService.findProdutosMarcaModelos();
        res.json(result)
    }
}

module.exports = new ProdutosController()