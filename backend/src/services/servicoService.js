const ServicosRepository = require("../repositorys/servicosRepository.js")
const AnimalService = require("../services/animaisService.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')

class ServicosService{
  
    async findServico(){
        return await ServicosRepository.selectServico()
    }

    async postServico(data){

        // valido se o id do animal é valido
        const animalId = await AnimalService.findAnimalPorId(data.animal_id)
        if(!animalId){
            throw new ExcecaoIdNaoEncontrado("Animal não encontrado")
        }

        // valido se o nome do serviço já existe registrado para o animal escolhido
        const animalNome = await ServicosRepository.selectSevicoPorIdNome(data.animal_id,data.nome)
        if(animalNome){
            throw new ExcecaoIdNaoEncontrado("Nome de serviço já cadastrado")
        }

        // retorno
        return await ServicosRepository.insertServico(data)
    }

    async putServico(servicoId, data){
        // retorno
        return await ServicosRepository.updateServico(servicoId, data)
    }
}

module.exports = new ServicosService()