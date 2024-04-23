import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './views/Login/Login.jsx'
import Cadastro_usuario from './views/Donos_pet/Cadastro_usuario/Cadastro_usuario.jsx'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/teste' element={<Login/>}/>
      <Route path='/cadastro/usuarios' element={<Cadastro_usuario/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
