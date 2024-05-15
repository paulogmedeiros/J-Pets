const EmpresasRepository = require("../repositories/empresasRepository.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')
const bcrypt = require("bcryptjs") 

class EmpresasService{

    async findEmpresas(){
        // retorno
        return await EmpresasRepository.selectEmpresas()
    }
  
    async createEmpresas(data){
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)
        return await EmpresasRepository.insertEmpresas(data)
    }
}


module.exports = new EmpresasService()