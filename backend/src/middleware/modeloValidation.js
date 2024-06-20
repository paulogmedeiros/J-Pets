const CriacaoModeloDTO = require('../validation/modelosDTO/createModelosDTO');

class ModeloValidation {


    validarCriacaoModelo(req, res, next) {
        const { error, value } = CriacaoModeloDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

}

module.exports = new ModeloValidation()
