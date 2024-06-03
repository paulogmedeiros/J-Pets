const EmpresasMarcasRepository = require("../repositories/empresasMarcasRepository.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const EmpresasAnimaisServico = require("../services/empresasAnimaisService.js")
const EmpresaService = require("../services/empresasService.js")
const AnimalService = require("../services/animaisService.js")

class EmpresasMarcasService {

    async findEmpresasMarcasPorIdEmpresaIdAnimal(empresaId,animalId){
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)

        // valido se animal existe
        await AnimalService.findAnimaisPorId(animalId)

        return await EmpresasMarcasRepository.selectEmpresasMarcasPorIdEmpresaIdAnimal(empresaId,animalId)
   }

   async findEmpresasMarcasPorIdEmpresaIdProduto(empresaId,produtoId){
    // valido se empresa existe
    await EmpresaService.findEmpresasPorId(empresaId)

    return await EmpresasMarcasRepository.selectEmpresasMarcasPorIdEmpresaIdProduto(empresaId,produtoId)
}

    async createEmpresasMarcas(data) {
       return await EmpresasMarcasRepository.insertEmpresasMarcas(data)
    }

    async removeEmpresasMarcas(empresaId,data){
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)
        // excluir os servicos da empresa
        await EmpresasMarcasRepository.deleteEmpresasMarcas(empresaId,data)

    }

}


module.exports = new EmpresasMarcasService()