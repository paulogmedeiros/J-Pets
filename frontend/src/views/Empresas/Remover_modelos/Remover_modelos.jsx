import React from 'react'
import Modelos_img from './img/Modelos_img.svg'
import './Remover_modelos.css'
import logoJPets from './img/logoJPets.png'
function Remover_modelos() {
  return (

    <>
      <nav className="navbarEmpresas navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo do projeto */}
          <a className="navbar-brand" href="#">
            <img src={logoJPets} width={45} height={45} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Itens da barra de navegação */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/empresas/principal">Início</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Produtos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/empresas/visualizarProdutos">Visualizar produtos</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarProdutos">Adicionar produtos</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerProdutos">Remover produtos</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarMarcas">Adicionar marcas</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerMarcas">Remover marcas</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarModelos">Adicionar modelos</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerModelos">Remover modelos</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Serviços
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/empresas/visualizarServicos">Visualizar serviços</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarServicos">Adicionar serviços</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerServicos">Remover serviços</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/empresas/cupons">Cupons</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Avaliações</a>
              </li>
            </ul>
          </div>
          <div className="dropdown me-5">
            <button className="btnPerfilEmpresa btn btn-secondary rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span className='d-inline-block mt-2 text-truncate' style={{ maxWidth: '100px' }}>
                {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
              </span>
            </button>
            <ul className="dropdown-menu">
              <a className="nav-link disabled ms-3" aria-disabled="true"><span className='d-inline-block mt-2 text-truncate' style={{ maxWidth: '100px' }}>
                {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
              </span></a>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Meu perfil</a></li>
              <li><a className="dropdown-item text-warning" href="/">Sair</a></li>
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
            <p className="tituloRemoverModeloEmpresa fs-md-2 fs-3 fw-semibold text-center mb-4 mb-md-4 mt-md-0">
              Remover modelos
            </p>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-4">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>
                <option value="Cachorro">teste</option>
                <option value="Gato">teste</option>
                <option value="Pássaro">teste</option>
                <option value="Peixe">teste</option>
              </select>
              <label for="floatingSelect">Marca</label>
            </div>

            {/* lista suspensa para escolher o produto */}
            <div className="form-floating mb-3 mb-md-4">
              <select
                className="form-select "
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>
                <option value="Cachorro">teste</option>
                <option value="Gato">teste</option>
                <option value="Pássaro">teste</option>
                <option value="Peixe">teste</option>
              </select>
              <label for="floatingSelect">Modelos</label>
            </div>

            <a className="btnRemoverModeloEmpresa btn w-100 mt-md-4" href="#" role="button">
              Remover
            </a>
          </div>
          <div className="imgRemoverModeloEmpresa col-md-5 d-flex mt-3 mt-md-0 rounded-4 p-3">
            <img src={Modelos_img} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Remover_modelos