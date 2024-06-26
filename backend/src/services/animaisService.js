const AnimaisRepository = require("../repositories/animaisRepository.js")
const {ExcecaoGenericaDeErro} =  require('../exception/customExceptions.js')

class AnimaisService{
  
    async findAnimais(){
        // retorno
        return await AnimaisRepository.selectAnimais()
    }

    async findAnimaisPorId(id){
        // valido se o id do animal é valido
        const animalId = await AnimaisRepository.selectAnimaisPorId(id)
        if(!animalId){
            throw new ExcecaoGenericaDeErro("Animal não encontrado")
        }
        // retorno
        return animalId
    }
}

module.exports = new AnimaisService()