const express = require("express")
const router = express.Router
const routes = new router()
const servico = require("./controllers/servicosController")


routes.get("/", (req,res)=>{
    res.json({mensagem_do_dia:"Já sorriu hoje?"})
});

// rotas de servicos
routes.get(("/servicos"),servico.getServico);


module.exports = routes