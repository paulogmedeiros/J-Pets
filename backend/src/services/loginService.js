const LoginRepository = require("../repositories/loginRepository.js")
const { ExcecaoGenericaDeErro } = require('../exception/customExceptions.js')
const bcrypt = require("bcryptjs")

class LoginService {

    async logar(data) {
        // valido se o email está certo
        const user = await LoginRepository.selectLogarPorEmail(data.email)
        if (!user) {
            throw new ExcecaoGenericaDeErro("Email ou senha incorreto")
        }
        // valido se a senha está certa
        if (!bcrypt.compareSync(data.senha, user.senha)) {
            throw new ExcecaoGenericaDeErro("Email ou senha incorreto")
        }

        if (user.tipo == 'EMP') {
            const empresa = await LoginRepository.selectEmpresasPorLoginId(user.id)
            user.statusPagamento = empresa.status_pagamento
            user.statusAtivo = empresa.status_ativo
            user.idEmpresa = empresa.id
            user.nome = empresa.nome_fantasia
        }

        if (user.tipo == 'DNP') {
            const donoPet = await LoginRepository.selectDonoPetPorLoginId(user.id)
            user.nome = donoPet.nome
        }

        return user;
    }

    async findUsuarioPorId(id, usuarioTipo) {
        // coleto o usuario com o id e verifico se ele existe
        let usuario;
        if (usuarioTipo === "ADM") {
            usuario = await LoginRepository.selectAdministradorPorId(id)
            if (!usuario) {
                throw new ExcecaoGenericaDeErro("Usuario não encontrado")
            }
            // retorno
            return usuario
        } else if (usuarioTipo === "EMP") {
            usuario = await LoginRepository.selectEmpresaPorId(id)
            if (!usuario) {
                throw new ExcecaoGenericaDeErro("Usuario não encontrado")
            }
            // retorno
            return usuario
        } else {
            usuario = await LoginRepository.selectDonoPetPorId(id)
            if (!usuario) {
                throw new ExcecaoGenericaDeErro("Usuario não encontrado")
            }
            // retorno
            return usuario
        }

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
            throw new ExcecaoGenericaDeErro("Email já cadastrado")
        }
        // retorno
        return login
    }

    async editSenhaRecuperacao(data, id) {
        // valido se usuario existe
        const user = await LoginRepository.selectUsuarioPorId(id)
        if (!user) {
            throw new ExcecaoGenericaDeErro("Usuario não encontrado")
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
            throw new ExcecaoGenericaDeErro("Usuario não encontrado")
        }

        // valido se a senha está certa
        if (!bcrypt.compareSync(data.senha, user.senha)) {
            throw new ExcecaoGenericaDeErro("Senha incorreta")
        }

        // valido se a nova senha é igual a anterior
        if (bcrypt.compareSync(data.novaSenha, user.senha)) {
            throw new ExcecaoGenericaDeErro("A senha não pode ser igual a anterior")
        }

        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

        // retorno
        return await LoginRepository.updateSenha(data, id)
    }

    async createEnvioEmail(data) {
        // valido se o email já está cadastrado
        const login = await LoginRepository.selectLogarPorEmail(data.email)
        if (!login) {
            throw new ExcecaoGenericaDeErro("Email não cadastrado")
        }
    }
}

module.exports = new LoginService()