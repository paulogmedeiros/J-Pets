const EmpresasModelosRepository = require("../repositories/empresasModelosRepository.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const EmpresasAnimaisServico = require("../services/empresasAnimaisService.js")
const EmpresaService = require("../services/empresasService.js")
const AnimalService = require("../services/animaisService.js")

class EmpresasModelosService {

    async findEmpresasModelosPorIdEmpresaIdMarca(marcaId, empresaId) {
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)

        return await EmpresasModelosRepository.selectEmpresasModelosPorIdEmpresaIdMarca(marcaId,empresaId)
    }

    async findEmpresasModelosPorIdEmpresa(empresaId) {
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)

        return await EmpresasModelosRepository.selectEmpresasModelosPorIdEmpresa(empresaId)
    }

    async createEmpresasModelos(data) {
        return await EmpresasModelosRepository.insertEmpresasModelos(data)
    }

    async removeEmpresasModelos(empresaId,data){
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)
        // excluir os servicos da empresa
        await EmpresasModelosRepository.deleteEmpresasModelos(empresaId,data)

    }

}


module.exports = new EmpresasModelosService()