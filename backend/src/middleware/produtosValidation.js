const CriacaoProdutosDTO = require('../validation/produtosDTO/createProdutosDTO');

class ProdutosValidation {


    validarCriacaoProdutos(req, res, next) {
        const { error, value } = CriacaoProdutosDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

}

module.exports = new ProdutosValidation()
