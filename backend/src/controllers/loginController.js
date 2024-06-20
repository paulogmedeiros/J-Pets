const LoginService = require("../services/loginService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer');
const secret = "MinhaSenha"

class LoginController {

    async logar(req, res) {
        try {
            const data = req.body;
            const result = await LoginService.logar(data);
            let usuario_id = result.id;
            let usuario_tipo = result.tipo;
            let nome;
            let statusPagamento;
            let statusAtivo;
            let idEmpresa;
            let token;
            if (result.tipo == 'EMP') {
                statusPagamento = result.statusPagamento
                statusAtivo = result.statusAtivo
                idEmpresa = result.idEmpresa
                nome = result.nome
                token = jwt.sign({ usuario_id, usuario_tipo, statusPagamento, statusAtivo, idEmpresa, nome }, secret, { expiresIn: 86400 })
            } else if (result.tipo == 'DNP') {
                nome = result.nome
                token = jwt.sign({ usuario_id, usuario_tipo, nome }, secret, { expiresIn: 86400 })
            } else {
                token = jwt.sign({ usuario_id, usuario_tipo }, secret, { expiresIn: 86400 })
            }
            res.status(200).json(token)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({ message: retorno.message })
        }
    }

    async getUsuarioPorId(req, res) {
        try {
            const usuarioTipo = req.usuario_tipo
            const param = parseInt(req.params.id)
            const result = await LoginService.findUsuarioPorId(param, usuarioTipo);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({ message: retorno.message })
        }
    }

    async postAdministrador(req, res) {
        try {
            const body = req.body
            await LoginService.createAdministrador(body);
            res.status(201).json({ message: "Usuário cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({ message: retorno.message })
        }
    }

    async putSenhaRecuperacao(req, res) {
        try {
            const body = req.body
            const id = parseInt(req.usuario_id)
            await LoginService.editSenhaRecuperacao(body, id);
            res.status(201).json({ message: "Usuário atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({ message: retorno.message })
        }
    }

    async putSenha(req, res) {
        try {
            const body = req.body
            const param = parseInt(req.params.id)
            await LoginService.editSenha(body, param);
            res.status(201).json({ message: "Usuário atualizado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({ message: retorno.message })
        }
    }

    async postEnvioEmail(req, res) {
        try {
            const body = req.body
            const user = await LoginService.createEnvioEmail(body);
            const usuario_id = user.id;
            const usuario_tipo = user.tipo;

            // Configuração do transporte de e-mail
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'zenzin1237@gmail.com',
                    pass: 'tjxt zlqx sdrj zylg'
                }
            });

            // Crio o token
            const token = jwt.sign({ usuario_id, usuario_tipo }, secret, { expiresIn: 3600 })
            
            const mailOptions = {
                from: 'zenzin1237@gmail.com',
                to: user.email,
                subject: 'Recuperação de senha',
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <h2 style="color: #2641B7;">Recuperação de Senha</h2>
                        <p>Olá,</p>
                        <p>Você está recebendo este e-mail porque você (ou alguém) solicitou a redefinição da senha para sua conta.</p>
                        <p>Por favor, clique no botão abaixo ou cole o link em seu navegador para concluir o processo dentro de uma hora da recepção deste email:</p>
                        <p>
                            <a href="http://localhost:3000/senha/alteracao/${token}" style="background-color: #2641B7; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                                Redefinir Senha
                            </a>
                        </p>
                        <p>Se você não solicitou isso, por favor ignore este email e sua senha permanecerá inalterada.</p>
                        <br>
                        <p>Atenciosamente,</p>
                        <p>Equipe J-Pets</p>
                    </div>
                `,
            };

            transporter.sendMail(mailOptions, (erro, response) => {
                if (erro) {
                    console.error('Erro ao enviar o email:', erro);
                    return res.status(500).json({ message: "Erro ao enviar o email" });
                }
                return res.status(200).json({ message: "E-mail enviado" })
            });
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.message)
        }
    }
}

module.exports = new LoginController()