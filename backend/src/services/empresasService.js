const EmpresasRepository = require("../repositories/empresasRepository.js")
const LoginService = require("../services/loginService.js")
const { ExcecaoGenericaDeErro } = require('../exception/customExceptions.js')
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

        const empresa = await EmpresasRepository.selectEmpresaPorId(id)

        if (!empresa.foto_perfil) {
            empresa.foto_perfil = "default.png"
        }

        return empresa
    }

    async findEmpresasPeloProudutoOuServico(tipo, id) {
        let users;
        if (tipo == 'SVC') {
             users = await EmpresasRepository.selectEmpresasPorServicoId(id)
        } else {
            users = await EmpresasRepository.selectEmpresaPorModeloId(id)
        }

        let usersUpdate = users.map(user =>
            user.foto_perfil === null ? { ...user, foto_perfil: 'default.png' } : user
          );

       return usersUpdate
    }

    async createEmpresas(data) {
        // valido se o cnpj é valido o formato
        const cnpjVerificacao = this.validatorCNPJ(data.cnpj)
        
        if (!cnpjVerificacao) {
            throw new ExcecaoGenericaDeErro("CNPJ inválido")
        }

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

    async editCancelarAssinatura(id) {
        // valido o id da empresa existe já está cadastrado
        await this.findEmpresasPorId(id)

        return await EmpresasRepository.updateCancelarAssinatura(id)
    }

    async editRemoverFotoPerfil(id) {
        // valido o id da empresa existe já está cadastrado
        await this.findEmpresasPorId(id)

        return await EmpresasRepository.updateRemoverFotoPerfil(id)
    }

    async editStatus(id) {
        // valido o id da empresa existe já está cadastrado
        const empresa = await this.findEmpresasPorId(id)
        let status;
        if (empresa.status_ativo) {
            status = false
            if (empresa.status_pagamento) {
                throw new ExcecaoGenericaDeErro("É necessario cancelar sua assinatura primeiro para desativar a conta")
            }
        } else {
            status = true
        }

        return await EmpresasRepository.updateStatus(id, status)
    }

    async editCriarInformacoesEmpresa(data, id) {
        // valido o id da empresa existe já está cadastrado
        const empresa = await this.findEmpresasPorId(id)

        // valido se o numero de contato já está registrado no sistema
        if (data.telefone != empresa.telefone) {
            const empresaTelefone = await EmpresasRepository.selectEmpresaPorTelefone(data.telefone)
            if (empresaTelefone) {
                throw new ExcecaoGenericaDeErro("Numero de contato já cadastrado")
            }
        }
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
            throw new ExcecaoGenericaDeErro("CNPJ já cadastrado")
        }
        // retorno
        return empresa
    }

    async findEmpresasPorNomeFantasia(nomeFantasia) {
        // valido se o nome fantasia já está cadastrado
        const empresa = await EmpresasRepository.selectEmpresaPorNomeFantasia(nomeFantasia)
        if (empresa) {
            throw new ExcecaoGenericaDeErro("Nome fantasia já cadastrado")
        }
        // retorno
        return empresa
    }

    async findEmpresasPorId(id) {
        // valido se empresa existe
        const empresa = await EmpresasRepository.selectEmpresasPorId(id)
        if (!empresa) {
            throw new ExcecaoGenericaDeErro("Empresa não encontrada")
        }
        // retorno
        return empresa
    }

    validatorCNPJ(cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj.length != 14) return false;

        let tamanhoTotal = cnpj.length - 2;
        let cnpjSemDigitos = cnpj.substring(0, tamanhoTotal);
        const digitosVerificadores = cnpj.substring(tamanhoTotal);
        let soma = 0;
        let pos = tamanhoTotal - 7;
        for (let i = tamanhoTotal; i >= 1; i--) {
            soma += cnpjSemDigitos.charAt(tamanhoTotal - i) * pos--;
            if (pos < 2) pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitosVerificadores.charAt(0)) return false;

        tamanhoTotal = tamanhoTotal + 1;
        cnpjSemDigitos = cnpj.substring(0, tamanhoTotal);
        soma = 0;
        pos = tamanhoTotal - 7;
        for (let i = tamanhoTotal; i >= 1; i--) {
            soma += cnpjSemDigitos.charAt(tamanhoTotal - i) * pos--;
            if (pos < 2) pos = 9;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitosVerificadores.charAt(1)) return false;

        return true;
    }
}


module.exports = new EmpresasService()