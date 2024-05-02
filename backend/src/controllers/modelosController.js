const modelosService = require("../services/modelosService.js")

class ModelosController{
    async postModelos(req,res){
        const data = req.body;
        const result = await modelosService.createModelos(data);
        res.json(result)
    }

    async getModelos(req,res){
        const result = await modelosService.findModelos();
        res.json(result)
    }
}

module.exports = new ModelosController()