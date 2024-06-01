const EmpresasProdutosService = require("../services/empresasProdutosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasProdutosController {

    async getEmpresasProdutosPorIdEmpresa(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const result = await EmpresasProdutosService.findEmpresasProdutosPorIdEmpresa(empresaId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }


    async postEmpresasProdutos(req, res) {
        try {
            const data = req.body;
            await EmpresasProdutosService.createEmpresasProduto(data);
            res.status(201).json({ mensage: "Produtos cadastrados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async deleteEmpresasProdutos(req, res) {
        // try {
            const empresaId = parseInt(req.params.empresaId)
            const data = req.body;
            await EmpresasProdutosService.removeEmpresasProdutos(empresaId, data);
            res.status(200).json({ mensage: "Produtos deletados com sucesso" })
        // } catch (error) {
        //     const retorno = FiltroExcecoes.tratarErro(error)
        //     res.status(retorno.status).json(retorno.mensage)
        // }
    }

}

module.exports = new EmpresasProdutosController()