const EmpresasProdutosRepository = require("../repositories/empresasProdutosRepository.js")
const { ExcecaoGenericaDeErro } = require('../exception/customExceptions.js')
const EmpresasAnimaisServico = require("../services/empresasAnimaisService.js")
const EmpresaService = require("../services/empresasService.js")
const AnimalService = require("../services/animaisService.js")

class EmpresasProdutosService {

    async findEmpresasProdutosPorIdEmpresa(empresaId,animalId){
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)

        // valido se animal existe
        await AnimalService.findAnimaisPorId(animalId)

        return await EmpresasProdutosRepository.selectEmpresasProdutosPorIdEmpresa(empresaId,animalId)
   }

    async createEmpresasProduto(data) {
        // valido se a empresa já tem o animal cadastrado
        const result = await EmpresasAnimaisServico.findEmpresasAnimaisPorEmpresaIdEAnimalId(data)

        const produtosEmpresa = await EmpresasProdutosRepository.selectEmpresasProdutosPorIdEmpresa(data.empresaId,data.animalId)
        const produtoCadastrados = produtosEmpresa.map((e)=> e.produto_id)

        for(const produto of data.produtosId){
            if(produtoCadastrados.includes(produto)){
                throw new ExcecaoGenericaDeErro("Produto já cadastrado")
            }
        }

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