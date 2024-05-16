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
routes.get("/servicos",servico.getServicos);
routes.post("/servicos", servico.postServicos);
routes.put("/servicos/:id", servico.putServicos);
routes.delete("/servicos/:id", servico.deleteServicos);

// rota de produtos 
routes.get("/produtos",produtos.getProdutos);
routes.get("/produtos/animais/:animalId",produtos.getProdutosPorIdAnimal);
routes.post("/produtos", produtos.postProdutos);
routes.put("/produtos/:id", produtos.putProdutos);
routes.delete("/produtos/:id", produtos.deleteProdutos);

// rota de marcas
routes.get("/marcas",marcas.getMarcas);
routes.get("/marcas/produtos/:produtoId",marcas.getMarcasPorIdProduto);
routes.post("/marcas", marcas.postMarcas);
routes.put("/marcas/:id", marcas.putMarcas);
routes.delete("/marcas/:id", marcas.deleteMarcas);

// rota de modelos
routes.get("/modelos", modelos.getModelos);
routes.post("/modelos", modelos.postModelos);
routes.put("/modelos/:id", modelos.putModelos);
routes.delete("/modelos/:id", modelos.deleteModelos);

// rota empresas
routes.get("/empresas", empresa.getEmpresas);
routes.post("/empresas",empresaValidation.validarCriacaoEmpresa,empresa.postEmpresa);

// rota de login
routes.post("/login",toenValidation.verificarToken,login.logar);




module.exports = routes