const marcasService = require("../services/marcasService.js")

class MarcasController{
    async postMarcas(req,res){
        const data = req.body;
        const result = await marcasService.createMarcas(data);
        res.json(result)
    }

    async getMarcas(req,res){
        const result = await marcasService.findMarcas();
        res.json(result)
    }
}

module.exports = new MarcasController()