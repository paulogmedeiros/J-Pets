const EmpresasServicosRepository = require("../repositories/empresasServicosRepository.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const EmpresasAnimaisServico = require("../services/empresasAnimaisService.js")

class EmpresasServicosService {

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

}


module.exports = new EmpresasServicosService()