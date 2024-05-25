import React from 'react'
import logoJPets from './img/logoJPets.png'
import './Principal_Empresas.css'
import imgAnuncioEmpresas from './img/imgAnuncioEmpresas.svg'

function Principal_Empresas() {
  return (
    <>
      <div>
        {/* Inicio da barra de navegação */}
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
                  <a class="nav-link active" aria-current="page" href="#">Início</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Produtos
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/empresas/adicionarProdutos">Adicionar produto</a></li>
                    <li><a class="dropdown-item" href="/empresas/removerProdutos">Remover produto</a></li>
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
                    <li><a class="dropdown-item" href="/empresas/adicionarServicos">Adicionar serviços</a></li>
                    <li><a class="dropdown-item" href="/empresas/removerServicos">Remover serviços</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Cupons</a>
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
                <li><a class="dropdown-item text-danger" href="/">Sair</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Imagem de anúncio */}
      <div class="anuncioPagInicialEmpresa container text-center mt-5 mb-5">
        <div class="row">

          <div class="col-md-6">
            <div className="text-center mt-md-5">
              <h1 className='fw-bold fs-1'>Seja um parceiro</h1>
              <h5>Tenha seu trabalho divulgado aqui!</h5>
              <p>Até <span className='text-warning fw-bold'>50% OFF</span> na primeira mensalidade!</p>

              <a class="btnSaibaMais btn w-50 mt-md-5 rounded-5" href="#" role="button">Assine já!</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-center">
              <img src={imgAnuncioEmpresas} width={400} height={500} class="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Principal_Empresas