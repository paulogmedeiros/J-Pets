const ModelosRepository = require("../repositorys/modelosRepository.js")
const MarcaService = require("../services/marcasService.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')

class ModelosService{
  
    async findModelos(){
        // retorno
        return await ModelosRepository.selectModelos()
    }

    async createModelos(data){
        // valido se o id do animal é valido
        await MarcaService.findMarcasPorId(data.marca_id)

        // valido se o nome do modelo já existe registrado para a marca escolhido
        await this.findModelosPorIdNome(data.marca_id,data.nome)

        // retorno
        return await ModelosRepository.insertModelos(data)
    }

    async editModelos(modeloId, data){
        // valido se modelo com esse id existe
        await this.findModelosPorId(modeloId)

       // valido se o id do animal é valido
       await MarcaService.findMarcasPorId(data.marca_id)

        // valido se o nome do modelo já existe registrado para a marca escolhido
        await this.findModelosPorIdNome(data.marca_id,data.nome)

        // retorno
        return await ModelosRepository.updateModelos(modeloId, data)
    }

    async removeModelos(modeloId){
        
        // valido se modelo com esse id existe
        await this.findModelosPorId(modeloId)

        // retorno
        return await ModelosRepository.deleteModelos(modeloId)
    }

    async findModelosPorIdNome(marca_id,nome){
        // valido se o nome do modelo já existe registrado para a marca escolhido
        const modeloNome = await ModelosRepository.selectModelosPorIdNome(marca_id,nome)
        if(modeloNome){
            throw new ExcecaoIdNaoEncontrado("Nome do modelo já cadastrado")
        }
        // retorno
        return modeloNome
    }

    async findModelosPorId(modeloId){
        // valido se modelo com esse id existe
        const modelo = await ModelosRepository.selectModelosPorId(modeloId)
        if(!modelo){
            throw new ExcecaoIdNaoEncontrado("Modelo não encontrado")
        }
        
        // retorno
        return modelo
    }
}

module.exports = new ModelosService()