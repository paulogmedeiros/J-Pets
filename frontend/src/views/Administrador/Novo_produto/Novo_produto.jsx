import React from 'react'
import './Novo_produto.css'
import imgCadastroItens from '../img/imgCadastro.svg'
import logoJPets_adm from '../img/logoJPets.png'
function Novo_produto() {
  return (

    <div className="admPainel">
      <nav className="admNavbar navbar navbar-expand-md">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#"><img src={logoJPets_adm} alt="" srcSet="" width={50} height={50} /></a>
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

        {/* container para formulario e imagem */}
        <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

          {/* container para formulario */}
          <div className="col-md-5 d-flex-md-5 mt-5 mt-md-0">

            {/* Título */}
            <p className="tituloNovoProduto fs-1 fw-semibold text-center mb-4 mb-md-5">Novo produto</p>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-3">
              <select className="form-select " id="floatingSelect" aria-label="Floating label select example">

                <option value="1">Animal 1</option>
                <option value="2">Animal 2</option>
                <option value="3">Animal 3</option>
              </select>
              <label for="floatingSelect">Animal</label>
            </div>

            {/* Input para inserir o nome do produto */}
            <div className="form-floating mb-3 mb-md-5">
              <input type="text" className="form-control" id="floatingInput" placeholder="" />
              <label for="floatingInput">Nome do produto</label>
            </div>


            <a className="btnNovoProduto btn w-100" href="#" role="button">Cadastrar produto</a>

          </div>
          <div className="imgNovoProduto col-md-5 d-flex mt-3 mt-md-0 rounded-4">
            <img src={imgCadastroItens} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Novo_produto