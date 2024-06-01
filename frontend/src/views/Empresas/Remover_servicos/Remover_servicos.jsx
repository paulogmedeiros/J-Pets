import React from 'react'
import './Remover_servicos.css'
import Servicos_img from './img/Servicos_img.svg'
import logoJPets from './img/logoJPets.png'
function Remover_servicos() {
  return (
    <>
      <nav class="navbarEmpresas navbar navbar-expand-lg">
        <div class="container-fluid">

          {/* Logo do projeto */}
          <a class="navbar-brand" href="#">
            <img src={logoJPets} width={45} height={45} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Itens da barra de navegação */}
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav nav-underline">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/empresas/principal">Início</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Produtos
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/empresas/visualizarProdutos">Visualizar produtos</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="/empresas/adicionarProdutos">Adicionar produtos</a></li>
                  <li><a class="dropdown-item" href="/empresas/removerProdutos">Remover produtos</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="/empresas/adicionarMarcas">Adicionar marcas</a></li>
                  <li><a class="dropdown-item" href="/empresas/removerMarcas">Remover marcas</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="/empresas/adicionarModelos">Adicionar modelos</a></li>
                  <li><a class="dropdown-item" href="/empresas/removerModelos">Remover modelos</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Serviços
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/empresas/visualizarServicos">Visualizar serviços</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="/empresas/adicionarServicos">Adicionar serviços</a></li>
                  <li><a class="dropdown-item" href="/empresas/removerServicos">Remover serviços</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/empresas/cupons">Cupons</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Avaliações</a>
              </li>
            </ul>
          </div>
          <div class="dropdown me-5">
            <button class="btnPerfilEmpresa btn btn-secondary rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nome
            </button>
            <ul class="dropdown-menu">
              <a class="nav-link disabled ms-3" aria-disabled="true">Nome</a>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Meu perfil</a></li>
              <li><a class="dropdown-item text-warning" href="/">Sair</a></li>
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
            <p class="tituloRemoverServicoEmpresa fs-2 fw-semibold text-center mb-4 mb-md-5">
              Remover serviços
            </p>

            {/* lista suspensa para selecionar o animal */}
            <div class="form-floating mb-3 mb-md-3">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>
                <option value="Cachorro">teste</option>
                <option value="Gato">teste</option>
                <option value="Pássaro">teste</option>
                <option value="Peixe">teste</option>
              </select>
              <label for="floatingSelect">Animal</label>
            </div>

            {/* lista suspensa para escolher o serviço */}
            <div class="form-floating mb-3 mb-md-3">
              <select
                class="form-select "
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>
                <option value="Cachorro">teste</option>
                <option value="Gato">teste</option>
                <option value="Pássaro">teste</option>
                <option value="Peixe">teste</option>
              </select>
              <label for="floatingSelect">Serviços</label>
            </div>

            <a class="btnRemoverServicoEmpresa btn w-100" href="#" role="button">
              Remover
            </a>
          </div>
          <div className="imgRemoverServicosEmpresa col-md-5 d-flex mt-3 mt-md-0 rounded-4">
            <img src={Servicos_img} class="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Remover_servicos