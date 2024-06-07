const EmpresasRepository = require("../repositories/empresasRepository.js")
const LoginService = require("../services/loginService.js")
const { ExcecaoIdNaoEncontrado } = require('../exception/customExceptions.js')
const bcrypt = require("bcryptjs")
const caminhoServer = require("path")

class EmpresasService {

    async findEmpresas() {
        // retorno
        return await EmpresasRepository.selectEmpresas()
    }

    async findCupom(id) {
        // valido o id da empresa existe já está cadastrado
        await this.findEmpresasPorId(id)

        return await EmpresasRepository.selectCupom(id)
    }

    async findEmpresaPorId(id) {
        // valido o id da empresa existe já está cadastrado
        await this.findEmpresasPorId(id)

        return await EmpresasRepository.selectEmpresaPorId(id)
    }

    async createEmpresas(data) {
        // valido se o cnpj já está cadastrado
        await this.findEmpresasPorCnpj(data.cnpj)

        // valido se o nome fantasia já está cadastrado
        await this.findEmpresasPorNomeFantasia(data.nomeFantasia)

        // valido se o email já está cadastrado
        await LoginService.findLoginPorEmail(data.email)

        // faço a criptografia da senha
        let salt = bcrypt.genSaltSync(10)
        data.senha = bcrypt.hashSync(data.senha, salt)

        // retorno
        return await EmpresasRepository.insertEmpresas(data)
    }

    async editCriarCupom(data, id) {
        // valido o id da empresa existe já está cadastrado
        await this.findEmpresasPorId(id)

        return await EmpresasRepository.updateCriarCupom(data, id)
    }

    async editCriarInformacoesEmpresa(data, id) {
        // valido o id da empresa existe já está cadastrado
        const empresa = await this.findEmpresasPorId(id)

        // valido se o numero de contato já está registrado no sistema
        if (data.telefone != empresa.telefone) {
            const empresaTelefone = await EmpresasRepository.selectEmpresaPorTelefone(data.telefone)
            if (empresaTelefone) {
                throw new ExcecaoIdNaoEncontrado("Numero de contato já cadastrado")
            }
        }
        const horaAbertura = new Date('1970-01-01T12:45:00Z').toISOString();
        const horaFechamento = new Date('1970-01-01T12:45:00Z').toISOString();
        data.horaAbertura = horaAbertura
        data.horaFechamento = horaFechamento
        return await EmpresasRepository.insertCriarInformacoesEmpresa(data, id)
    }

    async editEmpresaImagem(param, nomeImagem, arquivo) {

        const result = await EmpresasRepository.updateEmpresasImagem(param, nomeImagem)

        arquivo.mv(caminhoServer + "/../public/img/" + result.foto_perfil)

        return result
    }

    async editExcluirCupom(id) {
        // valido o id da empresa existe já está cadastrado
        await this.findEmpresasPorId(id)

        return await EmpresasRepository.updateExcluirCupom(id)
    }

    async findEmpresasPorCnpj(cnpj) {
        // valido se o cnpj já está cadastrado
        const empresa = await EmpresasRepository.selectEmpresaPorCNPJ(cnpj)
        if (empresa) {
            throw new ExcecaoIdNaoEncontrado("CNPJ já cadastrado")
        }
        // retorno
        return empresa
    }

    async findEmpresasPorNomeFantasia(nomeFantasia) {
        // valido se o nome fantasia já está cadastrado
        const empresa = await EmpresasRepository.selectEmpresaPorNomeFantasia(nomeFantasia)
        if (empresa) {
            throw new ExcecaoIdNaoEncontrado("Nome fantasia já cadastrado")
        }
        // retorno
        return empresa
    }

    async findEmpresasPorId(id) {
        // valido se empresa existe
        const empresa = await EmpresasRepository.selectEmpresasPorId(id)
        if (!empresa) {
            throw new ExcecaoIdNaoEncontrado("Empresa não encontrada")
        }
        // retorno
        return empresa
    }
}


module.exports = new EmpresasService()