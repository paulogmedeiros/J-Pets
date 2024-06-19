const criacaoAdministradorDTO = require('../validation/administradorDTO/createAdminstradorDTO');

class AdministradorValidation {


    validarCriacaoAdministrador(req, res, next) {
        const { error, value } = criacaoAdministradorDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }
}

module.exports = new AdministradorValidation()
