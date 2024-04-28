import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './views/Login/Login.jsx'
import Cadastro_usuario from './views/Donos_pet/Cadastro_usuario/Cadastro_usuario.jsx'
import Confirmacao_usuario from './views/Todos/Quem_e_voce/Quem_e_voce.jsx'
import Esqueceu_a_senha from './views/Todos/Esqueceu_a_senha/Esqueceu_a_senha.jsx';
import Cadastro_empresa from './views/Empresas/Cadastro_empresa/Cadastro_empresa.jsx'
import Nova_senha from './views/Todos/Nova_senha/Nova_senha.jsx';
import Redefinir_senha from './views/Donos_pet/Redefinir_senha/Redefinir_senha.jsx';
import Redefinir_senha_empresa from './views/Empresas/Redefinir_senha/Redefinir_senha.jsx';
import Redefinir_senha_adm from './views/Administrador/Redefinir_senha/Redefinir_senha.jsx';
import Painel_de_controle from './views/Administrador/Painel_de_controle/Painel_de_controle.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro/confirmacao' element={<Confirmacao_usuario/>}/>
      <Route path='/cadastro/usuario' element={<Cadastro_usuario/>}/>
      <Route path='/senha/recuperacao' element={<Esqueceu_a_senha/>}/>
      <Route path='/senha/nova' element={<Nova_senha/>}/>
      <Route path='/cadastro/empresa' element={<Cadastro_empresa/>}/>
      <Route path='/senha/redefinicao' element={<Redefinir_senha/>}/>
      <Route path='/senha/empresas/redefinicao' element={<Redefinir_senha_empresa/>}/>
      <Route path='/senha/administrador/redefinicao' element={<Redefinir_senha_adm/>}/>
      <Route path='/administrador/painel' element={<Painel_de_controle/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
