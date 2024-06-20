const CriacaoProdutosDTO = require('../validation/produtosDTO/createProdutosDTO');
const AtualizarProdutoDTO = require('../validation/produtosDTO/updateProdutosDTO')
class ProdutosValidation {


    validarCriacaoProdutos(req, res, next) {
        const { error, value } = CriacaoProdutosDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

    validarAtualizacaoProdutos(req, res, next) {
        const { error, value } = AtualizarProdutoDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

}

module.exports = new ProdutosValidation()
