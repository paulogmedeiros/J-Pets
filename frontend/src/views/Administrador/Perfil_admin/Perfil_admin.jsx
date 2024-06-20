import { useState, useEffect } from 'react'
import './Perfil_admin.css'
import logoJPets_adm from '../img/logoJPets.png'
import iconeVoltar from './img/iconeVoltar.svg'

function Perfil_admin() {
  const [email, setEmail] = useState('');
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"))
  const token = JSON.parse(localStorage.getItem("token"))
  const usuario_id = decodedToken['usuario_id']

  useEffect(() => {
    document.title = "Perfil | Administrador"
    pegarEmail()
  }, []);


  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
  }

  async function pegarEmail() {
    try {

      if (!usuario_id) {
        window.location.href = './'
      }

      const resposta = await fetch(process.env.REACT_APP_URL_API + '/usuario/' + usuario_id, {
        method: 'GET',
        headers: {
          'x-access-token': token
        }
      })

      if (!resposta.ok) {
        throw new Error('HTTP Erro' + resposta.status)
      }

      const dados = await resposta.json()
      setEmail(dados.email)

    } catch (error) {
      throw new Error('HTTP Erro' + error)
    }
  }

  return (
    <div>
      <div className="admPainel">
        <nav className="admNavbar navbar navbar-expand-md">
          <div className="container-fluid d-flex">
            <a className="navbar-brand" href="/administrador/painel"><img src={logoJPets_adm} alt="" srcSet="" width={50} height={50} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <div className="dropdown">
                    <button className="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ADM
                    </button>
                    <ul className="dropdown-menu ">
                      <li><a className="dropdown-item disabled" href="#">ADM</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/administrador/perfil">Meu perfil</a></li>
                      <li><button className="dropdown-item" onClick={logOff}>Sair</button></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <a href="/administrador/painel" type="button" class="btnVoltarServico btn m-5 rounded-5">
        <span>
          <img src={iconeVoltar} width={20} height={20} />
        </span>
        Voltar
      </a>
      <div className="container">

        <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">
          <div className="col-md-9 text-center text-md-start ">
            <h1 className='perfilAdmTitulo'>Meu perfil</h1>
            <div className=' rounded-3 p-5 border rounded-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
              <h3 className='text-md-start mb-5'>Administrador</h3>
              <div className="w-100"></div>
              <p>Email</p>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled />
                <label for="floatingInputDisabled">{email}</label>
              </div>
              <p>Senha</p>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled />
                <label for="floatingInputDisabled">*********</label>
              </div>
              <a href="/administrador/senha/alteracao" className='alterarSenhaAdm'>Alterar senha</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil_admin