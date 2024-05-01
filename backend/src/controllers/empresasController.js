const empresasService = require("../services/empresasService.js")

class EmpresasController{
    async postEmpresa(req,res){
        const data = req.body;
        const result = await empresasService.createEmpresas(data);
        res.json(result)
    }

    async getEmpresas(req,res){
        const result = await empresasService.findEmpresas();
        res.json(result)
    }
}

module.exports = new EmpresasController()