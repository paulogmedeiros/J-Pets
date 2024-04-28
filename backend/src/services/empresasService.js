const repository = require("../repositorys/empresasRepository.js")

class EmpresasService{
  
    async createEmpresas(data){
        return await repository.insertEmpresas(data)
    }

    async findEmpresas(){
        return await repository.selectEmpresas()
    }
}

module.exports = new EmpresasService()