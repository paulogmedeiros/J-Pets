const criacaoEmpresasDTO = require('../validation/empresasDTO/createEmpresasDTO');
const criacaoCupomEmpresasDTO = require('../validation/empresasDTO/createCupomEmpresaDTO')
class EmpresasValidation {


    validarCriacaoEmpresa(req, res, next) {
        const { error, value } = criacaoEmpresasDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

    validarCupomEmpresa(req, res, next) {
        const { error, value } = criacaoCupomEmpresasDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }
}

module.exports = new EmpresasValidation()
