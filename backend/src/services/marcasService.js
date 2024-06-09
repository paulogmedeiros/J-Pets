const MarcasRepository = require("../repositories/marcasRepository.js")
const ProdutosService = require("../services/produtosService.js")
const EmpresaService = require("../services/empresasService.js")
const {ExcecaoGenericaDeErro} =  require('../exception/customExceptions.js')

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

    async findMarcasPorIdProdutoIdEmpresa(produtoId,empresaId){
        // valido se o id da empresa é valido
        await EmpresaService.findEmpresasPorId(empresaId)

        return await MarcasRepository.selectMarcasPorIdProdutoIdEmpresa(produtoId,empresaId)
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
        const marca = await this.findMarcasPorId(marcaId)

        // valido se o nome da marca já existe registrado para o produto escolhido
        await this.findMarcasPorIdNome(marca.produto_id,data.nome)

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
            throw new ExcecaoGenericaDeErro("Nome da marca já cadastrado")
        }
        // retorno
        return marcaNome
    }

    async findMarcasPorId(marcaId){
        // valido se marca com esse id existe
        const marca = await MarcasRepository.selectMarcasPorId(marcaId)
        if(!marca){
            throw new ExcecaoGenericaDeErro("Marca não encontrada")
        }

        // retorno
        return marca
    }


}

module.exports = new MarcasService()