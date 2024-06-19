const criacaoDonoPetDTO = require('../validation/donosPetDTO/createDonoPetDTO');

class DonoPetValidation {


    validarCriacaoDonoPet(req, res, next) {
        const { error, value } = criacaoDonoPetDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }
}

module.exports = new DonoPetValidation()
