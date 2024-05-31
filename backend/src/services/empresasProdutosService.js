const EmpresasProdutosRepository = require("../repositories/empresasProdutosRepository.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const EmpresasAnimaisServico = require("../services/empresasAnimaisService.js")
const EmpresaService = require("../services/empresasService.js")
const AnimalService = require("../services/animaisService.js")

class EmpresasProdutosService {

    async createEmpresasProduto(data) {
        // valido se a empresa já tem o animal cadastrado
        const result = await EmpresasAnimaisServico.findEmpresasAnimaisPorEmpresaIdEAnimalId(data)

        // valido se a empresa já tiver o animal cadastrado criar apenas os relacionamentos com os produtos, caso contrario cria o relacionamento com o animal tambem
        if (result) {
            return await EmpresasProdutosRepository.insertEmpresasProdutos(data)
        } else {
            return await EmpresasProdutosRepository.insertEmpresasProdutosEEmpresaAnimal(data)
        }
    }

}


module.exports = new EmpresasProdutosService()