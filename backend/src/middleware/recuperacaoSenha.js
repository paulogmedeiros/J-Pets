const envioEmailDTO = require('../validation/recuperarcaoSenhaDTO/envioEmailDTO');
const novaSenhaDTO = require('../validation/recuperarcaoSenhaDTO/novaSenhaDTO')

class RecuperacaoSenhaValidation {


    validarEnvioEmail(req, res, next) {
        const { error, value } = envioEmailDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

    validarNovaSenha(req, res, next) {
        const { error, value } = novaSenhaDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }
}

module.exports = new RecuperacaoSenhaValidation()
