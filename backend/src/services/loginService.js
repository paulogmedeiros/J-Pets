const LoginRepository = require("../repositories/loginRepository.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')
const bcrypt = require("bcryptjs") 

class LoginService{
  
    async logar(data){
        const user = await LoginRepository.selectLogarPorEmail(data.email)

        let logado = bcrypt.compareSync(data.senha, user.senha);

        return user;
    }

    async findAdministradorPorId(id){
        // coleto o usuario com o id e verifico se ele existe
        const usuarioAdm = await LoginRepository.selectAdministradorPorId(id)
        if(!usuarioAdm){
            throw new ExcecaoIdNaoEncontrado("Usuario não encontrado")
        }
        // retorno
        return usuarioAdm
    }
    async createAdministrador(data){
        // valido se o email já está cadastrado
        await this.findLoginPorEmail(data.email)

        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

         // retorno
        return await LoginRepository.insertAdministrador(data)
    }

    async findLoginPorEmail(email){
        // valido se o email já está cadastrado
        const login = await LoginRepository.selectLogarPorEmail(email)
        if(login){
            throw new ExcecaoIdNaoEncontrado("Email já cadastrado")
        }
        // retorno
        return login
    }

    async editSenha(data,id){
        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

        // retorno
       return await LoginRepository.updateSenha(data,id)
   }
}

module.exports = new LoginService()