const servicosService = require("../services/servicoService.js")

class ServicosController{
    async getServico(req,res){
        const result = await servicosService.findServico();
        res.json(result)
    }
}

module.exports = new ServicosController()