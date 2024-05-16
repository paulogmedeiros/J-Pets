import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// Importando itens da pasta "Todos"
import Login from './views/Todos/Login/Login.jsx'
import Confirmacao_usuario from './views/Todos/Quem_e_voce/Quem_e_voce.jsx'
import Esqueceu_a_senha from './views/Todos/Esqueceu_a_senha/Esqueceu_a_senha.jsx';
import Alterar_senha from './views/Todos/Alterar_senha/Alterar_senha.jsx';

// Importando itens da pasta "Donos de pet"
import Cadastro_usuario from './views/Donos_pet/Cadastro_usuario/Cadastro_usuario.jsx'
import Redefinir_senha from './views/Donos_pet/Redefinir_senha/Redefinir_senha.jsx';

// Importando itens da pasta "Empresas"
import Cadastro_empresa from './views/Empresas/Cadastro_empresa/Cadastro_empresa.jsx'
import Redefinir_senha_empresa from './views/Empresas/Redefinir_senha/Redefinir_senha.jsx';

// Importando itens da pasta "Administrador"

// import adm_navbar from './components/componentes_adm/adm_navbar';
import Redefinir_senha_adm from './views/Administrador/Redefinir_senha/Redefinir_senha.jsx';

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
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Rotas para os itens da pasta "Todos" */}
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro/confirmacao' element={<Confirmacao_usuario/>}/>
      <Route path='/senha/recuperacao' element={<Esqueceu_a_senha/>}/>
      <Route path='/senha/alteracao' element={<Alterar_senha/>}/>

      {/* Rotas para os itens da pasta "Donos de pet" */}
      <Route path='/cadastro/usuario' element={<Cadastro_usuario/>}/>
      <Route path='/senha/redefinicao' element={<Redefinir_senha/>}/>

      {/* Rotas para os itens da pasta "Empresas" */}
      <Route path='/cadastro/empresa' element={<Cadastro_empresa/>}/>
      <Route path='/senha/empresas/redefinicao' element={<Redefinir_senha_empresa/>}/>

      {/* Rotas para os itens da pasta "Administrador" */}

      <Route path='/senha/administrador/redefinicao' element={<Redefinir_senha_adm/>}/>

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
