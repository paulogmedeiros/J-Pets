import { useState, useEffect } from 'react'
import './Cadastro_admin.css'
import logoJPets_adm from '../img/logoJPets.png'

function Cadastro_admin() {

  useEffect(() => {
    document.title = "Painel de controle | Cadastro administrador"
  })
  return (

    <div class="admPainel">
      <nav class="admNavbar navbar navbar-expand-md">
        <div class="container-fluid d-flex">
          <a class="navbar-brand" href="#"><img src={logoJPets_adm} alt="" srcset="" width={50} height={50} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <div class="dropdown">
                  <button class="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    P.G.
                  </button>
                  <ul class="dropdown-menu ">
                    <li><a class="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Meu perfil</a></li>
                    <li><a class="dropdown-item" href="#">Sair</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">

        <div className="row justify-content-center col-12 ps-4 col-md-10 position-absolute top-50 start-50 translate-middle ">

          <div className="col-md-5 d-flex-md-5">
            <p class="tituloCadastroAdmin fs-1 fw-bold text-center mb-2 mb-md-4">Cadastro administrador</p>

            <div class="form-floating mb-3">
              <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email</label>
            </div>

            <div class="form-floating mt-md-3 mb-3">
              <input type="password" class="form-control " id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Senha</label>
            </div>

            <div class="form-floating mt-md-3 mb-3">
              <input type="password" class="form-control " id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Confirmar senha</label>
            </div>

            <div className='text-center'>
              <a class="btnCadastroAdmin btn w-75 rounded-3" href="#" role="button">Cadastrar</a>
            </div>


            <p class="text-body-secondary text-center mt-3">
              <a href="/administrador/painel/" class="cancelarAdminCadastro link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Cancelar</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro_admin