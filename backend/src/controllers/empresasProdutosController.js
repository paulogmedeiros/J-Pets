const EmpresasProdutosService = require("../services/empresasProdutosService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasProdutosController {

    async getEmpresasProdutosPorIdEmpresa(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const animalId = parseInt(req.params.animalId)
            const result = await EmpresasProdutosService.findEmpresasProdutosPorIdEmpresa(empresaId,animalId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }


    async postEmpresasProdutos(req, res) {
        try {
            const data = req.body;
            await EmpresasProdutosService.createEmpresasProduto(data);
            res.status(201).json({ message: "Produtos cadastrados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async deleteEmpresasProdutos(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const data = req.body;
            await EmpresasProdutosService.removeEmpresasProdutos(empresaId, data);
            res.status(200).json({ message: "Produtos deletados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

}

module.exports = new EmpresasProdutosController()