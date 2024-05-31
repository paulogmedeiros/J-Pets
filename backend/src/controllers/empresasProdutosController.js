const EmpresasProdutosService = require("../services/empresasProdutosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasProdutosController {

    async postEmpresasSevico(req, res) {
        try {
            const data = req.body;
            await EmpresasProdutosService.createEmpresasProduto(data);
            res.status(201).json({ mensage: "Produtos cadastrados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

}

module.exports = new EmpresasProdutosController()