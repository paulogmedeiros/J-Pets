const criacaoAlteracaoSenhaDTO = require('../validation/alteracaoSenhaDTO/alteracaoSenhaDTO');

class AlteracaoSenhaValidation {


    validarAlteracaoSenha(req, res, next) {
        const { error, value } = criacaoAlteracaoSenhaDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }
}

module.exports = new AlteracaoSenhaValidation()
