const animaisRepository = require("../repositories/animaisRepository.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')

class AnimaisService{
  
    async findAnimais(){
        // retorno
        return await animaisRepository.selectAnimais()
    }

    async findAnimaisPorId(id){
        // valido se o id do animal é valido
        const animalId = await animaisRepository.selectAnimaisPorId(id)
        if(!animalId){
            throw new ExcecaoIdNaoEncontrado("Animal não encontrado")
        }
        // retorno
        return animalId
    }

}

module.exports = new AnimaisService()