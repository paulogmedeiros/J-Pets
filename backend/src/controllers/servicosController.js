const servicosService = require("../services/servicoService.js")
const filtroExcecoes = require("../exception/exceptionFilter.js")

class ServicosController {

    async getServico(req, res) {
        try {
            const result = await servicosService.findServico();
            res.status(200).json(result)
        } catch (error) {
            const retorno = filtroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async postServico(req, res) {
        try {
            const body = req.body
            await servicosService.postServico(body);
            res.status(201).json({ mensage: "Serviço cadastrado com sucesso" })
        } catch (error) {
            const retorno = filtroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }

    async putServico(req,res){
        try {
            const body = req.body
            const param = req.param
            await servicosService.putServico(param, body);
            res.status(200).json({ mensage: "Serviço atualizado com sucesso" })
        } catch (error) {
            const retorno = filtroExcecoes.tratarErro(error)
            res.status(retorno.status).json(retorno.mensage)
        }
    }
}

module.exports = new ServicosController()