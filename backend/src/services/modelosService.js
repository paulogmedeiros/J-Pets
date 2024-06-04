const ModelosRepository = require("../repositories/modelosRepository.js")
const MarcaService = require("../services/marcasService.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const EmpresaService = require("../services/empresasService.js")
class ModelosService {

    async findModelos() {
        // retorno
        return await ModelosRepository.selectModelos()
    }

    async findModelosPorIdProdutoIdEmpresa(marcaId,empresaId){
        // valido se o id da empresa é valido
        await EmpresaService.findEmpresasPorId(empresaId)

        return await ModelosRepository.selectModelosPorIdProdutoIdEmpresa(marcaId,empresaId)
    }

    async findModelosPorIdEmpresa(empresaId) {
        // valido se empresa existe
        await EmpresaService.findEmpresasPorId(empresaId)

        return await ModelosRepository.selectModelosPorIdEmpresa(empresaId)
    }

    async createModelos(data) {
        // valido se o id da marca é valido
        await MarcaService.findMarcasPorId(data.marca_id)

        // valido se o nome do modelo já existe registrado para a marca escolhido
        await this.findModelosPorIdNome(data.marca_id, data.nome)

        // retorno
        return await ModelosRepository.insertModelos(data)
    }

    async editModelos(modeloId, data) {
        // valido se modelo com esse id existe
        const modelo = await this.findModelosPorId(modeloId)

        // valido se o nome do modelo já existe registrado para a marca escolhido
        await this.findModelosPorIdNome(modelo.marca_id, data.nome)

        // retorno
        return await ModelosRepository.updateModelos(modeloId, data)
    }

    async removeModelos(modeloId) {

        // valido se modelo com esse id existe
        await this.findModelosPorId(modeloId)

        // retorno
        return await ModelosRepository.deleteModelos(modeloId)
    }

    async findModelosPorIdNome(marca_id, nome) {
        // valido se o nome do modelo já existe registrado para a marca escolhido
        const modeloNome = await ModelosRepository.selectModelosPorIdNome(marca_id, nome)
        if (modeloNome) {
            throw new ExcecaoIdNaoEncontrado("Nome do modelo já cadastrado")
        }
        // retorno
        return modeloNome
    }

    async findModelosPorId(modeloId) {
        // valido se modelo com esse id existe
        const modelo = await ModelosRepository.selectModelosPorId(modeloId)
        if (!modelo) {
            throw new ExcecaoIdNaoEncontrado("Modelo não encontrado")
        }

        // retorno
        return modelo
    }
}

module.exports = new ModelosService()