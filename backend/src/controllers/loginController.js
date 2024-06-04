const LoginService = require("../services/loginService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")
const jwt = require("jsonwebtoken")
const secret = "MinhaSenha"

class LoginController {

    async logar(req, res) {
        try {
            const data = req.body;
            const result = await LoginService.logar(data);
            let usuario_id = result.id;
            let usuario_tipo = result.tipo;
            let statusPagamento;
            let statusAtivo;
            let idEmpresa;
            let token;
            if (result.tipo == 'EMP') {
                statusPagamento = result.statusPagamento
                statusAtivo = result.statusAtivo
                idEmpresa = result.idEmpresa
                token = jwt.sign({ usuario_id, usuario_tipo, statusPagamento, statusAtivo, idEmpresa }, secret, { expiresIn: 86400 })
            } else {
                token = jwt.sign({ usuario_id, usuario_tipo }, secret, { expiresIn: 86400 })
            }
            res.status(200).json(token)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async getAdministradorPorId(req, res) {
        try {
            const usuarioTipo = req.usuario_tipo
            const param = parseInt(req.params.id)
            const result = await LoginService.findAdministradorPorId(param,usuarioTipo);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async postAdministrador(req, res) {
        try {
            const body = req.body
            await LoginService.createAdministrador(body);
            res.status(201).json({ mensage: "Usuário cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async putSenhaRecuperacao(req, res) {
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await LoginService.editSenhaRecuperacao(body, param);
            res.status(201).json({ mensage: "Usuário atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async putSenha(req, res) {
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await LoginService.editSenha(body, param);
            res.status(201).json({ mensage: "Usuário atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async postEnvioEmail(req, res) {
        try {
            const body = req.body
            await LoginService.createEnvioEmail(body);
            res.status(201).json({ mensage: "E-mail enviado" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }
}

module.exports = new LoginController()