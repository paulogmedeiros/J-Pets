const service = require("../services/servicoService.js")

class ServicosController{
    async getServico(req,res){
        const result = await service.findServico();
        res.json(result)
    }
}

module.exports = new ServicosController()