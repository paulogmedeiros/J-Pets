import React from 'react'
// import logoJPets_adm from '../views/Painel_de_controle/img/logoJPets_adm.svg'
import logoJPets_adm from '../../views/Administrador/Painel_de_controle/img/logoJPets_adm.svg'
function adm_navbar() {
  return (

      <nav class="admNavbar navbar navbar-expand-lg">
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
    
  )
}

export default adm_navbar