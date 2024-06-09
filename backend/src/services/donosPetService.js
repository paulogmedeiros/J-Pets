const DonosPetRepository = require("../repositories/donosPetRepository.js")
const LoginService = require("../services/loginService.js")
const {ExcecaoGenericaDeErro} =  require('../exception/customExceptions.js')
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

    async removeDonoPetPorIdLogin(loginId){
        // valido se usuario existe
        const donoPet = await DonosPetRepository.selectLoginDonoPets(loginId)
        if(!donoPet){
            throw new ExcecaoGenericaDeErro("Usuário não cadastrado")
        }
        // valido se o usuario é do perfil dono de pet
        if(donoPet.tipo != 'DNP'){
            throw new ExcecaoGenericaDeErro("Usuário não é do perfil tutor de pet")
        }
        // retorno
        return await DonosPetRepository.deleteDonoPetPorIdLogin(loginId,donoPet.tutores_pets.id)
    }

}


module.exports = new DonosPetService()