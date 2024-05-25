const DonosPetRepository = require("../repositories/donosPetRepository.js")
const LoginService = require("../services/loginService.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')
const bcrypt = require("bcryptjs") 

class DonosPetService{

    async createDonoPet(data){
        // valido se o email já está cadastrado
        await LoginService.findLoginPorEmail(data.email)

        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

        // retorno
        return await DonosPetRepository.insertDonoPet(data)
    }

}


module.exports = new DonosPetService()