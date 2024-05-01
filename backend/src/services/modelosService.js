const ModelosRepository = require("../repositorys/modelosRepository.js")

class ModelosService{
  
    async createModelos(data){
        return await ModelosRepository.insertModelos(data)
    }

    async findModelos(){
        return await ModelosRepository.selectModelos()
    }
}

module.exports = new ModelosService()