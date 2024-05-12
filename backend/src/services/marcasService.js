const MarcasRepository = require("../repositorys/marcasRepository.js")
const ProdutosService = require("../services/produtosService.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')

class MarcasService {

    async findMarcas() {
        // retorno
        return await MarcasRepository.selectMarcas()
    }

    async findMarcasPorIdProduto(produtoId) {
        // valido se o id do produto é valido
        await ProdutosService.findProdutosPorId(produtoId)

        // retorno
        return await MarcasRepository.selectMarcasPorIdProduto(produtoId)
    }

    async createMarcas(data) {
         // valido se o id do produto é valido
         await ProdutosService.findProdutosPorId(data.produto_id)

        // valido se o nome da marca já existe registrado para o produto escolhido
        await this.findMarcasPorIdNome(data.produto_id,data.nome)

        // retorno
        return await MarcasRepository.insertMarcas(data)
    }

    async editMarcas(marcaId, data){
        // valido se marca com esse id existe
        await this.findMarcasPorId(marcaId)

        // valido se o id do produto é valido
        await ProdutosService.findProdutosPorId(data.produto_id)

        // valido se o nome da marca já existe registrado para o produto escolhido
        await this.findMarcasPorIdNome(data.produto_id,data.nome)

        // retorno
        return await MarcasRepository.updateMarcas(marcaId, data)
    }

    async removeMarcas(marcaId){
        // valido se marca com esse id existe
        await this.findMarcasPorId(marcaId)

        // retorno
        return await MarcasRepository.deleteMarcas(marcaId)
    }

    async findMarcasPorIdNome(produto_id,nome){
        // valido se o nome da marca já existe registrado para o produto escolhido 
        const marcaNome = await MarcasRepository.selectMarcasPorIdNome(produto_id,nome)
        if(marcaNome){
            throw new ExcecaoIdNaoEncontrado("Nome da marca já cadastrado")
        }
        // retorno
        return marcaNome
    }

    async findMarcasPorId(marcaId){
        // valido se produto com esse id existe
        const marca = await MarcasRepository.selectMarcasPorId(marcaId)
        if(!marca){
            throw new ExcecaoIdNaoEncontrado("Marca não encontrada")
        }
        
        // retorno
        return marca
    }


}

module.exports = new MarcasService()