const repository = require("../repositorys/marcasRepository.js")

class MarcasService{
  
    async createMarcas(data){
        return await repository.insertMarcas(data)
    }

    async findMarcas(){
        return await repository.selectMarcas()
    }
}

module.exports = new MarcasService()