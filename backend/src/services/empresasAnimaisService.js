const EmpresasAnimaisRepository = require("../repositories/empresasAnimaisRepository.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const EmpresaService = require("../services/empresasService.js")
const AnimalService = require("../services/animaisService.js")

class EmpresasAnimaisService {

    async findEmpresasAnimaisPorEmpresaIdEAnimalId(data) {
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(data.empresaId)
        // valido se animal existe
        await AnimalService.findAnimaisPorId(data.animalId)
        // retorno
        return await EmpresasAnimaisRepository.selectEmpresasAnimaisPorEmpresaIdEAnimalId(data)
    }

}


module.exports = new EmpresasAnimaisService()