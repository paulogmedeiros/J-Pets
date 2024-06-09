const EmpresasMarcasService = require("../services/empresasMarcasService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasMarcasController {

    async getEmpresasMarcasPorIdEmpresaIdAnimal(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const animalId = parseInt(req.params.animalId)
            const result = await EmpresasMarcasService.findEmpresasMarcasPorIdEmpresaIdAnimal(empresaId,animalId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getEmpresasMarcasPorIdEmpresaIdProduto(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const produtoId = parseInt(req.params.produtoId)
            const result = await EmpresasMarcasService.findEmpresasMarcasPorIdEmpresaIdProduto(empresaId,produtoId);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async postEmpresasMarcas(req, res) {
        try {
            const data = req.body;
            await EmpresasMarcasService.createEmpresasMarcas(data);
            res.status(201).json({ message: "Marcas cadastrados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async deleteEmpresasMarcas(req, res) {
        try {
            const empresaId = parseInt(req.params.empresaId)
            const data = req.body;
            await EmpresasMarcasService.removeEmpresasMarcas(empresaId, data);
            res.status(200).json({ message: "Servicos deletados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

}

module.exports = new EmpresasMarcasController()