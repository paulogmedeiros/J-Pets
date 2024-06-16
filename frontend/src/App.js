import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Importando itens da pasta "Todos"
import Login from './views/Todos/Login/Login.jsx'
import Confirmacao_usuario from './views/Todos/Quem_e_voce/Quem_e_voce.jsx'
import Esqueceu_a_senha from './views/Todos/Esqueceu_a_senha/Esqueceu_a_senha.jsx';
import Alterar_senha from './views/Todos/Alterar_senha/Alterar_senha.jsx';
import Redefinir_senha from './views/Todos/Redefinir_senha/Redefinir_senha.jsx';

// Importando itens da pasta "Donos de pet"
import Principal_DonosDePet from './views/Donos_pet/Principal_DonosDePet/Principal_DonosDePet.jsx';
import Cadastro_usuario from './views/Donos_pet/Cadastro_usuario/Cadastro_usuario.jsx'
import Redefinir_senha_Donos_pet from './views/Donos_pet/Redefinir_senha/Redefinir_senha.jsx';
import Empresas_Mapa from './views/Donos_pet/Empresas_Mapa/Empresas_Mapa.jsx';
import Perfil_Empresa from './views/Donos_pet/Perfil_Empresa/Perfil_Empresa.jsx';
import Perfil_DonosDePet from './views/Donos_pet/Perfil_DonosDePet/Perfil_DonosDePet.jsx';
import Favoritos from './views/Donos_pet/Favoritos/Favoritos.jsx';
import Alterar_senha_empresa from './views/Empresas/Alterar_senha/Alterar_senha.jsx';


// Importando itens da pasta "Empresas"
import Principal_Empresas from './views/Empresas/Principal_Empresas/Principal_Empresas.jsx';
import Cadastro_empresa from './views/Empresas/Cadastro_empresa/Cadastro_empresa.jsx'
import Redefinir_senha_empresa from './views/Empresas/Redefinir_senha/Redefinir_senha.jsx';
import Adicionar_servicos from './views/Empresas/Adicionar_servicos/Adicionar_servicos.jsx';
import Remover_servicos from './views/Empresas/Remover_servicos/Remover_servicos.jsx';
import Adicionar_produtos from './views/Empresas/Adicionar_produtos/Adicionar_produtos.jsx';
import Adicionar_marcas from './views/Empresas/Adicionar_marcas/Adicionar_marcas';
import Adicionar_modelos from './views/Empresas/Adicionar_modelos/Adicionar_modelos';
import Remover_produtos from './views/Empresas/Remover_produtos/Remover_produtos.jsx';
import Remover_marcas from './views/Empresas/Remover_marcas/Remover_marcas.jsx';
import Remover_modelos from './views/Empresas/Remover_modelos/Remover_modelos.jsx';
import Cupons from './views/Empresas/Cupons/Cupons.jsx';
import Escolher_plano from './views/Empresas/Escolher_plano/Escolher_plano.jsx';
import Pagamento from './views/Empresas/Pagamento/Pagamento.jsx';
import Visualizar_produtos from './views/Empresas/Visualizar_produtos/Visualizar_produtos.jsx';
import Visualizar_servicos from './views/Empresas/Visualizar_servicos/Visualizar_servicos.jsx';
import PerfilDeEmpresas from './views/Empresas/PerfilDeEmpresas/PerfilDeEmpresas.jsx';
import CadastroPerfilProfissional from './views/Empresas/CadastroPerfilProfissional/CadastroPerfilProfissional.jsx';
import CancelarAssinatura from './views/Empresas/CancelarAssinatura/CancelarAssinatura.jsx';
import DesativarConta from './views/Empresas/DesativarConta/DesativarConta.jsx';
import AtivarConta from './views/Empresas/AtivarConta/AtivarConta.jsx';
import Avaliacoes from './views/Empresas/Avaliacoes/Avaliacoes.jsx';


// Importando itens da pasta "Administrador"
import Alterar_senha_admin from './views/Administrador/Alterar_senha_admin/Alterar_senha_admin.jsx';
import Perfil_admin from './views/Administrador/Perfil_admin/Perfil_admin.jsx';

// Importando itens da pasta "Administrador" - Painel de controle
import Cadastro_admin from './views/Administrador/Painel_de_controle/Cadastro_admin/Cadastro_admin.jsx';
import Painel_de_controle_empresas from './views/Administrador/Painel_de_controle/Empresas/Painel_de_controle_empresas.jsx';
import Painel_de_controle_produtos from './views/Administrador/Painel_de_controle/Produtos/Painel_de_controle_produtos.jsx';
import Painel_de_controle_servicos from './views/Administrador/Painel_de_controle/Serviços/Painel_de_controle_servicos.jsx';
import Painel_de_controle_marcas from './views/Administrador/Painel_de_controle/Marcas/Painel_de_controle_marcas.jsx';
import Painel_de_controle_modelos from './views/Administrador/Painel_de_controle/Modelos/Painel_de_controle_modelos.jsx';

// Importando itens da pasta "Administrador" - cadastro
import Nova_marca from './views/Administrador/Nova_marca/Nova_marca.jsx';
import Novo_modelo from './views/Administrador/Novo_modelo/Novo_modelo.jsx';
import Novo_produto from './views/Administrador/Novo_produto/Novo_produto.jsx';
import Novo_servico from './views/Administrador/Novo_servico/Novo_servico.jsx';

// Rotas para o frontend
function App() {
  return (
    <BrowserRouter>
    <Routes>

      {/* Rotas para os itens da pasta "Todos" */}
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro/confirmacao' element={<Confirmacao_usuario/>}/>
      <Route path='/senha/recuperacao' element={<Esqueceu_a_senha/>}/>
      <Route path='/senha/alteracao' element={<Alterar_senha/>}/>
      <Route path='/senha/redefinir' element={<Redefinir_senha/>}/>

      {/* Rotas para os itens da pasta "Donos de pet" */}
      <Route path='/usuario/principal' element={<Principal_DonosDePet/>}/>
      <Route path='/cadastro/usuario' element={<Cadastro_usuario/>}/>
      <Route path='/senha/redefinicao' element={<Redefinir_senha_Donos_pet/>}/>
      <Route path='/usuario/visualizarEmpresas' element={<Empresas_Mapa/>}/>
      <Route path='/usuario/perfilEmpresa' element={<Perfil_Empresa/>}/>
      <Route path='/usuario/perfil' element={<Perfil_DonosDePet/>}/>
      <Route path='/usuario/favoritos' element={<Favoritos/>}/>

      {/* Rotas para os itens da pasta "Empresas" */}
      <Route path='/empresas/principal' element={<Principal_Empresas/>}/>
      <Route path='/cadastro/empresa' element={<Cadastro_empresa/>}/>
      <Route path='/senha/empresas/alteracao' element={<Alterar_senha_empresa/>}/>
      <Route path='/senha/empresas/redefinicao' element={<Redefinir_senha_empresa/>}/>
      <Route path='/empresas/adicionarServicos' element={<Adicionar_servicos/>}/>
      <Route path='/empresas/removerServicos' element={<Remover_servicos/>}/>
      <Route path='/empresas/adicionarProdutos' element={<Adicionar_produtos/>}/>
      <Route path='/empresas/adicionarMarcas' element={<Adicionar_marcas/>}/>
      <Route path='/empresas/adicionarModelos' element={<Adicionar_modelos/>}/>
      <Route path='/empresas/removerProdutos' element={<Remover_produtos/>}/>
      <Route path='/empresas/removerMarcas' element={<Remover_marcas/>}/>
      <Route path='/empresas/removerModelos' element={<Remover_modelos/>}/>
      <Route path='/empresas/cupons' element={<Cupons/>}/>
      <Route path='/empresas/planos' element={<Escolher_plano/>}/>
      <Route path='/empresas/pagamento' element={<Pagamento/>}/>
      <Route path='/empresas/visualizarProdutos' element={<Visualizar_produtos/>}/>
      <Route path='/empresas/visualizarServicos' element={<Visualizar_servicos/>}/>
      <Route path='/empresas/perfil' element={<PerfilDeEmpresas/>}/>
      <Route path='/empresas/cadastroPerfil' element={<CadastroPerfilProfissional/>}/>
      <Route path='/empresas/cancelarAssinatura' element={<CancelarAssinatura/>}/>
      <Route path='/empresas/desativar' element={<DesativarConta/>}/>
      <Route path='/empresas/ativar' element={<AtivarConta/>}/>
      <Route path='/empresas/avaliacoes' element={<Avaliacoes/>}/>

      {/* Rotas para os itens da pasta "Administrador" */}
      <Route path='/administrador/senha/alteracao' element={<Alterar_senha_admin/>}/>
      <Route path='/administrador/perfil' element={<Perfil_admin/>}/>

       {/* Rotas para os itens da pasta "Administrador" - Painel de controle */}
      <Route path='/administrador/painel/cadastroAdmin' element={<Cadastro_admin/>}/>
      <Route path='/administrador/painel' element={<Painel_de_controle_empresas/>}/>
      <Route path='/administrador/painel/produtos' element={<Painel_de_controle_produtos/>}/>
      <Route path='/administrador/painel/servicos' element={<Painel_de_controle_servicos/>}/>
      <Route path='/administrador/painel/marcas' element={<Painel_de_controle_marcas/>}/>
      <Route path='/administrador/painel/modelos' element={<Painel_de_controle_modelos/>}/>

      {/* Rotas para os itens da pasta "Administrador" - cadastro */}
      <Route path='/administrador/painel/novaMarca' element={<Nova_marca/>}/>
      <Route path='/administrador/painel/novoModelo' element={<Novo_modelo/>}/>
      <Route path='/administrador/painel/novoProduto' element={<Novo_produto/>}/>
      <Route path='/administrador/painel/novoServico' element={<Novo_servico/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
