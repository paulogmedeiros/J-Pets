const express = require("express")
const router = express.Router
const routes = new router()

//controllers
const animais = require("./controllers/animaisController.js")
const servico = require("./controllers/servicosController.js")
const empresa = require("./controllers/empresasController.js")
const produtos = require("./controllers/produtosController.js")
const marcas = require("./controllers/marcasController.js")
const modelos = require("./controllers/modelosController.js")
const login = require("./controllers/loginController.js")

//middleware
const empresaValidation = require("./middleware/empresasValidation.js")
const toenValidation = require("./middleware/tokenValidation.js")


//rotas
routes.get("/", (req,res)=>{
    res.json({mensagem_do_dia:"Já sorriu hoje?"})
});

//rotas de animais
routes.get("/animais", animais.getAnimais);

// rotas de servicos
routes.get("/servicos",servico.getServico);
routes.post("/servicos", servico.postServico);

// rota de produtos
routes.post("/produtos", produtos.postProdutos);
routes.get("/produtos", produtos.getProdutos);
routes.get("/produtos/marcas/modelos", produtos.getProdutosMarcaModelos);

// rota de marcas
routes.post("/marcas", marcas.postMarcas);
routes.get("/marcas", marcas.getMarcas);

// rota de modelos
routes.post("/modelos", modelos.postModelos);
routes.get("/modelos", modelos.getModelos);

// rota empresas
routes.post("/empresas",empresaValidation.validarCriacaoEmpresa,empresa.postEmpresa);
routes.get("/empresas", empresa.getEmpresas);

// rota de login
routes.post("/login",toenValidation.verificarToken,login.logar);




module.exports = routes