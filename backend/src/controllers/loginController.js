const loginService = require("../services/loginService.js")
const jwt = require("jsonwebtoken")
const secret = "MinhaSenha"

class LoginController {
    async logar(req, res) {
        const data = req.body;
        const result = await loginService.logar(data);
        let usuario_id = result.id;
        let usuario_tipo = result.tipo;
        let  token = jwt.sign({ usuario_id, usuario_tipo }, secret, { expiresIn: 120 })
        res.json({ token })
    }
}

module.exports = new LoginController()