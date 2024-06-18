const CriacaoMarcaDTO = require('../validation/marcasDTO/createMarcasDTO');

class MarcaValidation {


    validarCriacaoMarca(req, res, next) {
        const { error, value } = CriacaoMarcaDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

}

module.exports = new MarcaValidation()
