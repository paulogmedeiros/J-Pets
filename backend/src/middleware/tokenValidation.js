const jwt = require("jsonwebtoken")
const secret = "MinhaSenha"

class TokenValidation {


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

module.exports = new TokenValidation()