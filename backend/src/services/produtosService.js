const repository = require("../repositorys/produtosRepository.js")

class ProdutosService{
  
    async createProdutos(data){
        return await repository.insertProdutos(data)
    }

    async findProdutos(){
        return await repository.selectProdutos()
    }

    async findProdutosMarcaModelos(){
        return await repository.selectProdutosMarcaModelos()
    }
}

module.exports = new ProdutosService()