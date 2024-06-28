import { useState, useEffect } from 'react'
import './Cadastro_admin.css'
import logoJPets_adm from '../img/logoJPets.png'
import { notifications } from '@mantine/notifications'
import { Loader } from '@mantine/core';
import iconeVoltar from '../../img/iconeVoltar.svg'

function Cadastro_admin() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erroSenha, setErroSenha] = useState(''); // Novo estado para mensagem de erro

  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = "Painel de controle | Cadastro administrador"
  },[])

  // função para cadastrar administradores (login>postAdministrador)
  async function cadastrarAdministrador(event) {

    // impede o comportamento padrão de reload da página
    event.preventDefault()


    // tratamento pra ver se as senhas são iguais
    if (senha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem")
      return; // Adiciona este retorno para sair da função se as senhas não coincidirem
    }

    // dados a serem enviados para o backend
    const administradorDados = {
      email,
      senha
    }

    try {
      // Realiza POST para a API
      const result = await fetch(process.env.REACT_APP_URL_API + '/cadastro/administrador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(administradorDados)
      })
      const resposta = await result.json()
      console.log(resposta.status, result.status)

      if (result.status >= 400) { // Verifica se o status é 201 Created
        throw new Error(resposta.message)
      }

      notifications.show({ message: resposta.message, color: "white", icon: sucessIcon });
      setTimeout(() => {

      }, 1500);

    } catch (error) {

      console.log(error)
      notifications.show({ message: error.message, color: "white", icon: errorIcon });
    }

  }

  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
  }
  return (

    // barra de navegação
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
      
      {/* fim da barra de navegação */}

      {/* início do conteúdo principal */}
      <a href="/administrador/painel/" type="button" class="btnVoltarServico btn m-5 rounded-5">
        <span>
          <img src={iconeVoltar} width={20} height={20} />
        </span>
        Voltar
      </a>

      <div className="container">

        <div className="row justify-content-center col-12 ps-4 col-md-10 position-absolute top-50 start-50 translate-middle ">

          <div className="col-md-5 d-flex-md-5 border rounded-4 p-5 bg-light shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <p className="tituloCadastroAdmin fs-1 fw-bold text-center mb-2 mb-md-4">Cadastro administrador</p>

            {/* input para o email */}
            <div className="form-floating mb-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control "
                id="floatingInput"
                placeholder="name@example.com" />
              <label for="floatingInput">Email</label>
            </div>

            {/* input para a senha */}
            <div className="form-floating mt-md-3 mb-3">
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                className="form-control "
                id="floatingPassword"
                placeholder="Password" />
              <label for="floatingPassword">Senha</label>
            </div>

            {/* input para a confirmação da senha (com validação) */}
            <div className="form-floating mb-1 mb-md-3">
              <input type="password"
                value={confirmarSenha}
                onChange={e => setConfirmarSenha(e.target.value)}
                className="form-control"
                id="floatingPassword"
                placeholder="Password" />
              <label for="floatingPassword">Confirmar senha</label>
              {erroSenha && <div className="text-danger">{erroSenha}</div>}
            </div>

            {/* botão para cadastrar */}
            <div className='text-center'>
              <button
                onClick={cadastrarAdministrador}
                className="btnCadastroAdmin btn w-75
              rounded-3"
                role="button">Cadastrar</button>
            </div>

            {/* botão para cancelar  */}
            <p className="text-body-secondary text-center mt-3">
              <a href="/administrador/painel/" className="cancelarAdminCadastro link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Cancelar</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro_admin