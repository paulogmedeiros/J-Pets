const ProdutosRepository = require("../repositories/produtosRepository.js")
const AnimalService = require("../services/animaisService.js")
const EmpresaService = require("../services/empresasService.js")
const {ExcecaoGenericaDeErro} =  require('../exception/customExceptions.js')

class ProdutosService{
  
    async findProdutos(){
        // retorno
        return await ProdutosRepository.selectProdutos()
    }

    async findProdutosPorIdAnimal(animalId){
        // valido se o id do animal é valido
        await AnimalService.findAnimaisPorId(animalId)

        // retorno
        return await ProdutosRepository.selectProdutosPorIdAnimal(animalId)
    }

    async findProdutosPorIdAnimalIdEmpresa(animalId,empresaId){
        // valido se o id do animal é valido
        await AnimalService.findAnimaisPorId(animalId)

        // valido se o id da empresa é valido
        await EmpresaService.findEmpresasPorId(empresaId)

        return await ProdutosRepository.selectProdutosPorIdAnimalIdEmpresa(animalId,empresaId)
    }

    async createProdutos(data){
        // valido se o id do animal é valido
        await AnimalService.findAnimaisPorId(data.animal_id)

        // valido se o nome do produto já existe registrado para o animal escolhido
        await this.findProdutosPorIdNome(data.animal_id,data.nome)

        // retorno
        return await ProdutosRepository.insertProdutos(data)
    }

    async editProdutos(produtoId, data){
        // valido se produto com esse id existe
        const produto = await this.findProdutosPorId(produtoId)

        // valido se o nome do produto já existe registrado para o animal escolhido
        await this.findProdutosPorIdNome(produto.animal_id,data.nome)

        // retorno
        return await ProdutosRepository.updateProdutos(produtoId, data)
    }

    async removeProdutos(produtoId){
        // valido se produto com esse id existe
        await this.findProdutosPorId(produtoId)

        // retorno
        return await ProdutosRepository.deleteProdutos(produtoId)
    }

    async findProdutosPorIdNome(animal_id,nome){
        // valido se o nome do produto já existe registrado para o animal escolhido 
        const produtoNome = await ProdutosRepository.selectProdutosPorIdNome(animal_id,nome)
        if(produtoNome){
            throw new ExcecaoGenericaDeErro("Nome do produto já cadastrado")
        }
        // retorno
        return produtoNome
    }

    async findProdutosPorId(produtoId){
        // valido se produto com esse id existe
        const produto = await ProdutosRepository.selectProdutosPorId(produtoId)
        if(!produto){
            throw new ExcecaoGenericaDeErro("Produto não encontrado")
        }
        
        // retorno
        return produto
    }

}

module.exports = new ProdutosService()