const MarcasRepository = require("../repositorys/marcasRepository.js")

class MarcasService{
  
    async createMarcas(data){
        return await MarcasRepository.insertMarcas(data)
    }

    async findMarcas(){
        return await MarcasRepository.selectMarcas()
    }
}

module.exports = new MarcasService()