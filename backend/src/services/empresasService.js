const empresasRepository = require("../repositorys/empresasRepository.js")
const bcrypt = require("bcryptjs") 

class EmpresasService{
  
    async createEmpresas(data){
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)
        return await empresasRepository.insertEmpresas(data)
    }

    async findEmpresas(){
        return await empresasRepository.selectEmpresas()
    }
}

module.exports = new EmpresasService()