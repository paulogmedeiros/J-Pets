const EmpresasServicosRepository = require("../repositories/empresasServicosRepository.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const EmpresasAnimaisServico = require("../services/empresasAnimaisService.js")
const EmpresaService = require("../services/empresasService.js")
const AnimalService = require("../services/animaisService.js")

class EmpresasServicosService {

    async findEmpresasSevicoPorIdEmpresaIdAnimal(empresaId,animalId){
         // valido se empresa existe
         await EmpresaService.findEmpresasPorId(empresaId)

         // valido se animal existe
        await AnimalService.findAnimaisPorId(animalId)

         return await EmpresasServicosRepository.selectEmpresasSevicoPorIdEmpresaIdAnimal(empresaId,animalId)
    }

    async findEmpresasSevicoPorIdEmpresa(empresaId){
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)

        return await EmpresasServicosRepository.selectEmpresasSevicoPorIdEmpresa(empresaId)
   }

    async createEmpresasServicos(data) {
        // valido se a empresa já tem o animal cadastrado
        const result = await EmpresasAnimaisServico.findEmpresasAnimaisPorEmpresaIdEAnimalId(data)

        // valido se a empresa já tiver o animal cadastrado criar apenas os relacionamentos com os serviço, caso contrario cria o relacionamento com o animal tambem
        if (result) {
            return await EmpresasServicosRepository.insertEmpresasServicos(data)
        } else {
            return await EmpresasServicosRepository.insertEmpresasServicosEEmpresaAnimal(data)
        }
    }

    async removeEmpresasServicos(empresaId,data){
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)
        // valido se animal existe
        await AnimalService.findAnimaisPorId(data.animalId)
        // excluir os servicos da empresa
        await EmpresasServicosRepository.deleteEmpresasServicos(empresaId,data)

    }

}


module.exports = new EmpresasServicosService()