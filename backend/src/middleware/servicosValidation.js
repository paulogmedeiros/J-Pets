const CriacaoServicoDTO = require('../validation/servicosDTO/createServicoDTO');

class ServicoValidation {


    validarCriacaoServico(req, res, next) {
        const { error, value } = CriacaoServicoDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

}

module.exports = new ServicoValidation()
