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
const empresasSevicos = require("./controllers/empresasServicosController.js")
const empresasAnimais = require("./controllers/empresasAnimaisController.js")
const empresasProdutos = require("./controllers/empresasProdutosController.js")
const empresasMarcas = require("./controllers/empresasMarcasController.js")
const empresasModelos = require("./controllers/empresasModelosController.js")
const cartoes = require("./controllers/cartoesController.js")

//middleware
const alteracaoSenhaValidation = require("./middleware/alteracaoSenhaValidation.js")
const administradorValidation = require("./middleware/administradorValidation.js")
const donoPetValidation = require("./middleware/donoPetValidation.js")
const servicoValidation = require("./middleware/servicosValidation.js")
const marcaValidation = require("./middleware/marcaValidation.js")
const modeloValidation = require("./middleware/modeloValidation.js")
const recuperacaoSenhaValidation = require("./middleware/recuperacaoSenha.js")
const empresaValidation = require("./middleware/empresasValidation.js")
const produtosValidation = require("./middleware/produtosValidation.js")
const cartaoValidation = require("./middleware/cartoesValidation.js")
const loginValidation = require("./middleware/loginValidation.js")
const tokenValidation = require("./middleware/tokenValidation.js")
//rotas
routes.get("/", (req,res)=>{
    res.json({mensagem_do_dia:"Já sorriu hoje?"})
});

//rotas de animais
routes.get("/animais", animais.getAnimais);

// rotas de servicos
routes.get("/servicos",servico.getServicos);
routes.get("/servicos/animais/:animalId/empresa/:empresaId", servico.getServicosPorIdAnimalIdEmpresa);
routes.get("/servicos/:id", servico.getServicosPorId);
routes.get("/servicos/animais/:animalId", servico.getServicosPorIdAnimal);
routes.post("/servicos",servicoValidation.validarCriacaoServico,servico.postServicos);
routes.put("/servicos/:id",produtosValidation.validarAtualizacaoProdutos, servico.putServicos);
routes.delete("/servicos/:id", servico.deleteServicos);

// rota de produtos
routes.get("/produtos",produtos.getProdutos);
routes.get("/produtos/animais/:animalId/empresa/:empresaId", produtos.getProdutosPorIdAnimalIdEmpresa);
routes.get("/produtos/animais/:animalId",produtos.getProdutosPorIdAnimal);
routes.get("/produtos/:id", produtos.getProdutosPorId);
routes.post("/produtos",produtosValidation.validarCriacaoProdutos, produtos.postProdutos);
routes.put("/produtos/:id",produtosValidation.validarAtualizacaoProdutos, produtos.putProdutos);
routes.delete("/produtos/:id", produtos.deleteProdutos);

// rota de marcas
routes.get("/marcas",marcas.getMarcas);
routes.get("/marcas/produtos/:produtoId/empresa/:empresaId", marcas.getMarcasPorIdProdutoIdEmpresa);
routes.get("/marcas/produtos/:produtoId",marcas.getMarcasPorIdProduto);
routes.get("/marcas/:id", marcas.getMarcasPorId);
routes.post("/marcas",marcaValidation.validarCriacaoMarca, marcas.postMarcas);
routes.put("/marcas/:id",produtosValidation.validarAtualizacaoProdutos ,marcas.putMarcas);
routes.delete("/marcas/:id", marcas.deleteMarcas);

// rota de modelos
routes.get("/modelos", modelos.getModelos);
// routes.get("/modelos/empresa/:empresaId", modelos.getModelosPorIdEmpresa)
routes.get("/modelos/:id", modelos.getModelosPorId);
routes.get("/modelos/marcas/:marcasId", modelos.getModelosPorIdMarca);
routes.get("/modelos/marcas/:marcasId/empresa/:empresaId", modelos.getModelosPorIdMarcaIdEmpresa);
routes.post("/modelos",modeloValidation.validarCriacaoModelo, modelos.postModelos);
routes.put("/modelos/:id",produtosValidation.validarAtualizacaoProdutos, modelos.putModelos);
routes.delete("/modelos/:id", modelos.deleteModelos);

// rota empresas
routes.get("/empresas", empresa.getEmpresas);
routes.get("/empresas/:tipo/servicosProdutos/:id", empresa.getEmpresasPeloProudutoOuServico);
routes.post("/empresas/imagem/:id", empresa.putEmpresasImagem);
routes.get("/empresas/cupom/:id",empresa.getCupom);
routes.get("/empresas/:id",empresa.getEmpresaPorId);
routes.post("/empresas",empresaValidation.validarCriacaoEmpresa,empresa.postEmpresa);
routes.put("/empresas/cancelar/assinatura/:id",empresa.putCancelarAssinatura);
routes.put("/empresas/status/:id",empresa.putStatus);
routes.put("/empresas/remover/foto/:id",empresa.putRemoverFotoPerfil);
routes.put("/empresas/criar/cupom/:id",empresaValidation.validarCupomEmpresa,empresa.putCriarCupom);
routes.put("/empresas/informacoes/:id",empresa.putCriarInformacoesEmpresa);
routes.put("/empresas/excluir/cupom/:id",empresa.putExcluirCupom);

// rota de login
routes.get("/usuario/:id",tokenValidation.verificarToken,login.getUsuarioPorId);
routes.post("/cadastro/administrador",administradorValidation.validarCriacaoAdministrador,login.postAdministrador);
routes.post("/login",loginValidation.validarLogin,login.logar);
routes.post("/envio/email",recuperacaoSenhaValidation.validarEnvioEmail,login.postEnvioEmail);
routes.put("/recuperacao/senha",tokenValidation.verificarToken,recuperacaoSenhaValidation.validarNovaSenha,login.putSenhaRecuperacao);
routes.put("/senha/:id",alteracaoSenhaValidation.validarAlteracaoSenha,login.putSenha);

// rota donoPet
routes.post("/donoPet",donoPetValidation.validarCriacaoDonoPet,donoPet.postDonoPet);
routes.delete("/donoPet/:loginId",donoPet.deleteDonoPetPorIdLogin);

// rota empresasAnimais
routes.get("/empresasAnimais/:empresaId", empresasAnimais.getEmpresasAnimaisPorIdEmpresa);

// rota empresasSevico
routes.get("/empresasSevico/:empresaId/animais/:animalId",empresasSevicos.getEmpresasSevicoPorIdEmpresaIdAnimal);
routes.get("/empresasSevico/:empresaId",empresasSevicos.getEmpresasSevicoPorIdEmpresa);
routes.post("/empresasSevico",empresasSevicos.postEmpresasSevico);
routes.delete("/empresasSevico/:empresaId",empresasSevicos.deleteEmpresasSevico);

// rota empresasProdutos
routes.get("/empresasProdutos/:empresaId/animais/:animalId",empresasProdutos.getEmpresasProdutosPorIdEmpresa);
routes.post("/empresasProdutos",empresasProdutos.postEmpresasProdutos);
routes.delete("/empresasProdutos/:empresaId",empresasProdutos.deleteEmpresasProdutos);

// rota empresasMarcas
routes.get("/empresasMarcas/:empresaId/animais/:animalId",empresasMarcas.getEmpresasMarcasPorIdEmpresaIdAnimal);
routes.get("/empresasMarcas/:empresaId/produto/:produtoId",empresasMarcas.getEmpresasMarcasPorIdEmpresaIdProduto);
routes.post("/empresasMarcas",empresasMarcas.postEmpresasMarcas);
routes.delete("/empresasMarcas/:empresaId",empresasMarcas.deleteEmpresasMarcas);

// rota empresasModelos
routes.get("/empresasModelos/:empresaId/marca/:marcaId",empresasModelos.getEmpresasModelosPorIdEmpresaIdMarca);
routes.get("/empresasModelos/:empresaId",empresasModelos.getEmpresasModelosPorIdEmpresa);
routes.post("/empresasModelos",empresasModelos.postEmpresasModelos);
routes.delete("/empresasModelos/:empresaId",empresasModelos.deleteEmpresasModelos);

// rota cartoes
routes.post("/cartoes/:empresaId",cartaoValidation.validarCartao,cartoes.postCartoes)

module.exports = routes