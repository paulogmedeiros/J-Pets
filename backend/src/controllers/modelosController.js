const service = require("../services/modelosService.js")

class ModelosController{
    async postModelos(req,res){
        const data = req.body;
        const result = await service.createModelos(data);
        res.json(result)
    }

    async getModelos(req,res){
        const result = await service.findModelos();
        res.json(result)
    }
}

module.exports = new ModelosController()