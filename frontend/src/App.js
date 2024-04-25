import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './views/Login/Login.jsx'
import Cadastro_usuario from './views/Donos_pet/Cadastro_usuario/Cadastro_usuario.jsx'
import Confirmacao_usuario from './views/Todos/Quem_e_voce/Quem_e_voce.jsx'
import Esqueceu_a_senha from './views/Todos/Esqueceu_a_senha/Esqueceu_a_senha.jsx';
import Redefinir_senha from './views/Todos/Redefinir_senha/Redefinir_senha.jsx';
import Nova_senha from './views/Todos/Nova_senha/Nova_senha.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro/confirmacao' element={<Confirmacao_usuario/>}/>
      <Route path='/cadastro/usuario' element={<Cadastro_usuario/>}/>
      <Route path='/senha/recuperacao' element={<Esqueceu_a_senha/>}/>
      <Route path='/senha/redefinicao' element={<Redefinir_senha/>}/>
      <Route path='/senha/nova' element={<Nova_senha/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
