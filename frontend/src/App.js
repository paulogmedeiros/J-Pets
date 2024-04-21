import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './views/Login/Login.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/teste' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
