const CartaoDTO = require('../validation/cartaoDTO/cartoesVerificarDTO');

class CartaoValidation {


    validarCartao(req, res, next) {
        const { error, value } = CartaoDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

}

module.exports = new CartaoValidation()
