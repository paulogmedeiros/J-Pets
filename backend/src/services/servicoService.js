const ServicosRepository = require("../repositories/servicosRepository.js")
const AnimalService = require("../services/animaisService.js")
const EmpresaService = require("../services/empresasService.js")
const {ExcecaoIdNaoEncontrado} =  require('../exception/customExceptions.js')

class ServicosService{
  
    async findServicos(){
        // retorno
        return await ServicosRepository.selectServicos()
    }

    async findServicosPorIdAnimalIdEmpresa(animalId,empresaId){
        // valido se o id do animal é valido
        await AnimalService.findAnimaisPorId(animalId)

        // valido se o id da empresa é valido
        await EmpresaService.findEmpresasPorId(empresaId)

        return await ServicosRepository.selectServicosPorIdAnimalIdEmpresa(animalId,empresaId)
    }

    async createServicos(data){
        // valido se o id do animal é valido
        await AnimalService.findAnimaisPorId(data.animal_id)

        // valido se o nome do serviço já existe registrado para o animal escolhido
        await this.findSevicosPorIdNome(data.animal_id,data.nome)

        // retorno
        return await ServicosRepository.insertServicos(data)
    }

    async editServicos(servicoId, data){
        // valido se servico com esse id existe
        const servico = await this.findServicosPorId(servicoId)

        // valido se o nome do serviço já existe registrado para o animal escolhido
        await this.findSevicosPorIdNome(servico.animal_id,data.nome)
        
        // retorno
        return await ServicosRepository.updateServicos(servicoId, data)
    }

    async removeServicos(servicoId){
        // valido se servico com esse id existe
        await this.findServicosPorId(servicoId)

        // retorno
        return await ServicosRepository.deleteServicos(servicoId)
    }

    async findServicosPorId(servicoId){
        // valido se servico com esse id existe
        const servico = await ServicosRepository.selectServicosPorId(servicoId)
        if(!servico){
            throw new ExcecaoIdNaoEncontrado("Servico não encontrado")
        }
        // retorno
        return servico
    }

    async findSevicosPorIdNome(animal_id,nome){
        // valido se o nome do serviço já existe registrado para o animal escolhido 
        const servicoNome = await ServicosRepository.selectSevicosPorIdNome(animal_id,nome)
        if(servicoNome){
            throw new ExcecaoIdNaoEncontrado("Nome de serviço já cadastrado")
        }
        // retorno
        return servicoNome
    }
}

module.exports = new ServicosService()