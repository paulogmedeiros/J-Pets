const produtosRepository = require("../repositorys/produtosRepository.js")

class ProdutosService{
  
    async createProdutos(data){
        return await produtosRepository.insertProdutos(data)
    }

    async findProdutos(){
        return await produtosRepository.selectProdutos()
    }

    async findProdutosMarcaModelos(){
        return await produtosRepository.selectProdutosMarcaModelos()
    }
}

module.exports = new ProdutosService()