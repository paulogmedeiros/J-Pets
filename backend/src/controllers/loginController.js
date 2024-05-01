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

    verificarToken(req,res,next){
        const token = req.headers['x-access-token']
        jwt.verify(token,secret,(erro,decoded) => {
            if(erro){
                return res.status(401).json("Usuário não autenticado")
            }else{
                // req.usuario_id = decoded.usuario_id
                // req.usuario_tipo = decoded.usuario_tipo
                next()
            }
        })
    }
}

module.exports = new LoginController()