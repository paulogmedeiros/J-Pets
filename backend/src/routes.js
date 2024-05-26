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
const donoPet = require("./controllers/donosPetController.js")
const empresasSevico = require("./controllers/empresasServicosController.js")

//middleware
const empresaValidation = require("./middleware/empresasValidation.js")
const tokenValidation = require("./middleware/tokenValidation.js")


//rotas
routes.get("/", (req,res)=>{
    res.json({mensagem_do_dia:"Já sorriu hoje?"})
});

//rotas de animais
routes.get("/animais", animais.getAnimais);

// rotas de servicos
routes.get("/servicos",servico.getServicos);
routes.get("/servicos/animais/:animalId/empresa/:empresaId", servico.getServicosPorIdAnimal);
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
routes.get("/empresas/cupom/:id",empresa.getCupom);
routes.post("/empresas",empresa.postEmpresa);
routes.put("/empresas/criar/cupom/:id",empresa.putCriarCupom);
routes.put("/empresas/excluir/cupom/:id",empresa.putExcluirCupom);

// rota de login
routes.get("/administrador/:id",login.getAdministradorPorId);
routes.post("/cadastro/administrador",login.postAdministrador);
routes.post("/login",login.logar);
routes.post("/envio/email",login.postEnvioEmail);
routes.put("/recuperacao/senha/:id",login.putSenhaRecuperacao);
routes.put("/senha/:id",login.putSenha);

// rota donoPet
routes.post("/donoPet",donoPet.postDonoPet);

// rota empresasSevico
routes.post("/empresasSevico",empresasSevico.postEmpresasSevico);


module.exports = routes