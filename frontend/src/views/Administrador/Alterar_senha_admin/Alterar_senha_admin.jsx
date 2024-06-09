import React from 'react'
import imgSenha from '../img/img_senha.svg'
import './Alterar_senha_admin.css'
import logoJPets_adm from '../img/logoJPets.png'

function Alterar_senha_admin() {
  return (

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
                    P.G.
                  </button>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Meu perfil</a></li>
                    <li><a className="dropdown-item" href="#">Sair</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">

        <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

          <div className="col-md-5 d-flex-md-5 mt-5 pt-5">
            <div className='text-center'>
              <img src={imgSenha} width={60} height={60} />
            </div>

            <p className="AlterarSenhaAdminTitulo fs-1 fw-bold text-center mb-2 mb-md-5 mt-3">Alteração de senha</p>

            <div className="form-floating mt-md-5 mb-3 mt-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Senha atual</label>
            </div>


            <div className="form-floating mt-md-3 mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Nova senha</label>
            </div>

            <div className="form-floating mt-md-3 mb-4">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Confirmação da nova senha</label>
            </div>

            <a className="btnAlterarSenhaAdmin btn w-100" href="#" role="button">Confirmar</a>

            <p className="text-body-dark text-center mt-3">
              <a href="#" className="cancelarAlterarSenhaAdmin link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Cancelar</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alterar_senha_admin