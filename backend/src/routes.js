const express = require("express")
const router = express.Router
const routes = new router()
const servico = require("./controllers/servicosController.js")
const empresa = require("./controllers/empresasController.js")


routes.get("/", (req,res)=>{
    res.json({mensagem_do_dia:"Já sorriu hoje?"})
});

// rotas de servicos
routes.get(("/servicos"),servico.getServico);

// rota empresas
routes.post(("/empresas"),empresa.postEmpresa)
routes.get(("/empresas"), empresa.getEmpresas)

module.exports = routes