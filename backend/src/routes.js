const express = require("express")
const router = express.Router
const routes = new router()
const servico = require("./controllers/servicosController.js")
const empresa = require("./controllers/empresasController.js")
const produtos = require("./controllers/produtosController.js")
const marcas = require("./controllers/marcasController.js")
const modelos = require("./controllers/modelosController.js")


routes.get("/", (req,res)=>{
    res.json({mensagem_do_dia:"Já sorriu hoje?"})
});

// rotas de servicos
routes.get(("/servicos"),servico.getServico);

// rota de produtos
routes.post(("/produtos"), produtos.postProdutos)
routes.get(("/produtos"), produtos.getProdutos)
routes.get(("/produtos/marcas/modelos"), produtos.getProdutosMarcaModelos)

// rota de marcas
routes.post(("/marcas"), marcas.postMarcas)
routes.get(("/marcas"), marcas.getMarcas)

// rota de modelos
routes.post(("/modelos"), modelos.postModelos)
routes.get(("/modelos"), modelos.getModelos)

// rota empresas
routes.post(("/empresas"),empresa.postEmpresa)
routes.get(("/empresas"), empresa.getEmpresas)

module.exports = routes