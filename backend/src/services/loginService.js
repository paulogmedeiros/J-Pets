const LoginRepository = require("../repositories/loginRepository.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const bcrypt = require("bcryptjs")

class LoginService {

    async logar(data) {
        // valido se o email está certo
        const user = await LoginRepository.selectLogarPorEmail(data.email)
        if (!user) {
            throw new ExcecaoIdNaoEncontrado("Email ou senha incorreto")
        }
        // valido se a senha está certa
        if (!bcrypt.compareSync(data.senha, user.senha)) {
            throw new ExcecaoIdNaoEncontrado("Email ou senha incorreto")
        }
        return user;
    }

    async findAdministradorPorId(id) {
        // coleto o usuario com o id e verifico se ele existe
        const usuarioAdm = await LoginRepository.selectAdministradorPorId(id)
        if (!usuarioAdm) {
            throw new ExcecaoIdNaoEncontrado("Usuario não encontrado")
        }
        // retorno
        return usuarioAdm
    }
    async createAdministrador(data) {
        // valido se o email já está cadastrado
        await this.findLoginPorEmail(data.email)

        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

        // retorno
        return await LoginRepository.insertAdministrador(data)
    }

    async findLoginPorEmail(email) {
        // valido se o email já está cadastrado
        const login = await LoginRepository.selectLogarPorEmail(email)
        if (login) {
            throw new ExcecaoIdNaoEncontrado("Email já cadastrado")
        }
        // retorno
        return login
    }

    async editSenhaRecuperacao(data, id) {
        // valido se usuario existe
        const user = await LoginRepository.selectUsuarioPorId(id)
        if (!user) {
            throw new ExcecaoIdNaoEncontrado("Usuario não encontrado")
        }

        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

        // retorno
        return await LoginRepository.updateSenhaRecuperacao(data, id)
    }

    async editSenha(data, id) {

        // valido se usuario existe
        const user = await LoginRepository.selectUsuarioPorId(id)
        if (!user) {
            throw new ExcecaoIdNaoEncontrado("Usuario não encontrado")
        }

        // valido se a senha está certa
        if (!bcrypt.compareSync(data.senha, user.senha)) {
            throw new ExcecaoIdNaoEncontrado("Senha incorreta")
        }

        // valido se a nova senha é igual a anterior
        if (bcrypt.compareSync(data.novaSenha, user.senha)) {
            throw new ExcecaoIdNaoEncontrado("A senha não pode ser igual a anterior")
        }

        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

        // retorno
        return await LoginRepository.updateSenha(data, id)
    }
}

module.exports = new LoginService()