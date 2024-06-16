const EmpresasService = require("../services/empresasService.js")
const FiltroExcecoes = require("../exception/exceptionFilter.js")

class EmpresasController {
    async getEmpresas(req, res) {
        try {
            const result = await EmpresasService.findEmpresas();
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getCupom(req, res) {
        try {
            const param = parseInt(req.params.id)
            const result = await EmpresasService.findCupom(param);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getEmpresaPorId(req, res) {
        try {
            const param = parseInt(req.params.id)
            const result = await EmpresasService.findEmpresaPorId(param);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async getEmpresasPeloProudutoOuServico(req, res) {
        try {
            const tipo = req.params.tipo
            const id = parseInt(req.params.id)
            const result = await EmpresasService.findEmpresasPeloProudutoOuServico(tipo,id);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async postEmpresa(req, res) {
        try {
            const data = req.body;
            await EmpresasService.createEmpresas(data);
            res.status(201).json({ message: "Empresa cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putEmpresasImagem(req, res) {
        try {
            const param = parseInt(req.params.id)
            let nomeImagem = req.files.imagem.name
            nomeImagem = nomeImagem.split(".")
            let extensao = nomeImagem[nomeImagem.length - 1]
            if (extensao === "png") {
                nomeImagem = new Date().getTime() + "." + extensao
                let arquivo = req.files.imagem
                const result = await EmpresasService.editEmpresaImagem(param, nomeImagem, arquivo);
                res.status(200).json({ message: "Imagem atualizada com sucesso" })
            } else {
                res.status(400).json({ message: "Valido para cadastro apenas imagens .png" })
            }
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putCriarCupom(req, res) {
        try {
            const data = req.body;
            const param = parseInt(req.params.id)
            const result = await EmpresasService.editCriarCupom(data, param);
            res.status(201).json({ message: "Cupom cadastrado com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putCancelarAssinatura(req, res) {
        try {
            const param = parseInt(req.params.id)
            await EmpresasService.editCancelarAssinatura(param);
            res.status(200).json({ message: "Assinatura cancelada!!!" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putRemoverFotoPerfil(req, res) {
        try {
            const param = parseInt(req.params.id)
            const result = await EmpresasService.editRemoverFotoPerfil(param);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putStatus(req, res) {
        try {
            const param = parseInt(req.params.id)
            const result = await EmpresasService.editStatus(param);
            res.status(200).json(result)
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putCriarInformacoesEmpresa(req, res) {
        try {
            console.log(req.body)
            const data = req.body;
            const param = parseInt(req.params.id)
            const result = await EmpresasService.editCriarInformacoesEmpresa(data, param);
            res.status(201).json({ message: "Alterações cadastradas com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }

    async putExcluirCupom(req, res) {
        try {
            const param = parseInt(req.params.id)
            const result = await EmpresasService.editExcluirCupom(param);
            res.status(201).json({ message: "Cupom excluido com sucesso" })
        } catch (error) {
            const retorno = FiltroExcecoes.tratarErro(error)
            res.status(retorno.status).json({message: retorno.message})
        }
    }


}

module.exports = new EmpresasController()