const EmpresasRepository = require("../repositories/empresasRepository.js")
const LoginService = require("../services/loginService.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')
const bcrypt = require("bcryptjs") 

class EmpresasService{

    async findEmpresas(){
        // retorno
        return await EmpresasRepository.selectEmpresas()
    }
  
    async createEmpresas(data){
        // valido se o cnpj já está cadastrado
        await this.findEmpresasPorCnpj(data.cnpj)

        // valido se o nome fantasia já está cadastrado
        await this.findEmpresasPorNomeFantasia(data.nomeFantasia)

        // valido se o email já está cadastrado
        await LoginService.findLoginPorEmail(data.email)

        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

        // retorno
        return await EmpresasRepository.insertEmpresas(data)
    }

    async findEmpresasPorCnpj(cnpj){
        // valido se o cnpj já está cadastrado
        const empresa = await EmpresasRepository.selectEmpresaPorCNPJ(cnpj)
        if(empresa){
            throw new ExcecaoIdNaoEncontrado("CNPJ já cadastrado")
        }
        // retorno
        return empresa
    }

    async findEmpresasPorNomeFantasia(nomeFantasia){
        // valido se o nome fantasia já está cadastrado
        const empresa = await EmpresasRepository.selectEmpresaPorNomeFantasia(nomeFantasia)
        if(empresa){
            throw new ExcecaoIdNaoEncontrado("Nome fantasia já cadastrado")
        }
        // retorno
        return empresa
    }
}


module.exports = new EmpresasService()