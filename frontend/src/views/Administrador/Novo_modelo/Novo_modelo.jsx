import React from 'react'
import './Novo_modelo.css'
import imgCadastroItens from '../img/imgCadastro.svg'
import logoJPets_adm from '../img/logoJPets.png'
function Novo_modelo() {
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

        {/* container para formulario e imagem */}
        <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

          {/* container para formulario */}
          <div className="col-md-5 d-flex-md-5 mt-5 pt-5 mt-md-0 pt-md-0">

            {/* Título */}
            <p class="tituloNovoModelo fs-1 fw-semibold text-center mb-0 mb-md-4">Novo modelo</p>

            {/* lista suspensa para selecionar o animal */}
            <div class="form-floating mb-3 mb-md-3">
              <select class="form-select " id="floatingSelect" aria-label="Floating label select example">

                <option value="1">Animal 1</option>
                <option value="2">Animal 2</option>
                <option value="3">Animal 3</option>
              </select>
              <label for="floatingSelect">Animal</label>
            </div>

            {/* lista suspensa para selecionar o produto */}
            <div class="form-floating mb-3 mb-md-3">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option value="1">Produto 1</option>
                <option value="2">Produto 2</option>
                <option value="3">Produto 3</option>
              </select>
              <label for="floatingSelect">Produto</label>
            </div>


            {/* lista suspensa para selecionar a marca */}
            <div class="form-floating mb-3 mb-md-3">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option value="1">Marca 1</option>
                <option value="2">Marca 2</option>
                <option value="3">Marca 3</option>
              </select>
              <label for="floatingSelect">Marca</label>
            </div>

            {/* Input para inserir o nome do modelo */}
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="" />
              <label for="floatingInput">Nome do modelo</label>
            </div>


            <a class="btnNovoModelo btn w-100" href="#" role="button">Cadastrar modelo</a>

          </div>
          <div className="imgNovoModelo col-md-5 d-flex mt-3 mt-md-0 rounded-4">
            <img src={imgCadastroItens} class="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Novo_modelo