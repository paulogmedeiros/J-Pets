const EmpresasAnimaisService = require("../services/empresasAnimaisService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasAnimaisController {


    async getEmpresasAnimaisPorEmpresaIdEAnimalId(req, res) {
        try {
            const param = parseInt(req.params.empresaId)
            await EmpresasAnimaisService.findEmpresasAnimaisPorEmpresaIdEAnimalId(param);
            res.status(201).json({ message: "Animal cadastrados com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getEmpresasAnimaisPorIdEmpresa(req,res){
        try {
            const empresaId = parseInt(req.params.empresaId)
            const result = await EmpresasAnimaisService.findEmpresasAnimaisPorIdEmpresa(empresaId)
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    
}

module.exports = new EmpresasAnimaisController()