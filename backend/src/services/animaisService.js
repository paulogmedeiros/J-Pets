const animaisRepository = require("../repositorys/animaisRepository.js")


class AnimaisService{
  
    async findAnimais(){
        return await animaisRepository.selectAnimais()
    }

    async findAnimalPorId(id){
        return await animaisRepository.selectAnimalPorId(id)
    }

}

module.exports = new AnimaisService()