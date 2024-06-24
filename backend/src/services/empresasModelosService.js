const EmpresasModelosRepository = require("../repositories/empresasModelosRepository.js")
const { ExcecaoGenericaDeErro } = require('../exception/customExceptions.js')
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
        const modelosEmpresa = await EmpresasModelosRepository.selectEmpresasModelosPorIdEmpresa(data.empresaId)
        const modelosCadastrados = modelosEmpresa.map((e)=> e.modelos.id)

        for(const modelo of data.modelosId){
            if(modelosCadastrados.includes(modelo)){
                throw new ExcecaoGenericaDeErro("Modelo já cadastrado")
            }
        }
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