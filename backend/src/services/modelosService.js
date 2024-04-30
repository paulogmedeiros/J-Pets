const repository = require("../repositorys/modelosRepository.js")

class ModelosService{
  
    async createModelos(data){
        return await repository.insertModelos(data)
    }

    async findModelos(){
        return await repository.selectModelos()
    }
}

module.exports = new ModelosService()