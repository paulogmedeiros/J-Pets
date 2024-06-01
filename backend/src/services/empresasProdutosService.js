const EmpresasProdutosRepository = require("../repositories/empresasProdutosRepository.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const EmpresasAnimaisServico = require("../services/empresasAnimaisService.js")
const EmpresaService = require("../services/empresasService.js")
const AnimalService = require("../services/animaisService.js")

class EmpresasProdutosService {

    async findEmpresasProdutosPorIdEmpresa(empresaId){
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)

        return await EmpresasProdutosRepository.selectEmpresasProdutosPorIdEmpresa(empresaId)
   }

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

    async removeEmpresasProdutos(empresaId,data){
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)
        // valido se animal existe
        await AnimalService.findAnimaisPorId(data.animalId)
        // excluir os servicos da empresa
        await EmpresasProdutosRepository.deleteEmpresasProdutos(empresaId,data)

    }

}


module.exports = new EmpresasProdutosService()