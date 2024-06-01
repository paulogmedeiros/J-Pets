import React from 'react'
import logoJPets from './img/logoJPets.png'
import './Avaliacoes.css'
import imgEstrela from './img/imgEstrela.svg'
function Avaliacoes() {
  return (
    <div>
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

      <div class="containerGeralAvaliacoes">
        <div class="containerPerfilAvaliacoes row justify-content-center border row-cols-md-2 row-cols-1">
          <div class="col-md-5 d-md-flex text-center  p-md-5 p-3 ps-md-5"><img src={logoJPets} width={100} className='me-md-3' />
            <h2 className='mt-4'>Nome da empresa</h2>

          </div>
          <div class="col-md-6 p-3 text-center ">
            <div class="card text-center">
              <div class="card-header">
                <h2>Média</h2>
              </div>
              <div class="card-body">
                <h5 class="card-title ">
                  <div className="d-flex justify-content-center">
                    <h3 className='pt-3 pe-2'>4,6</h3>
                    <img src={imgEstrela} />
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <h4 className='container pt-5 text-md-start text-center'>Comentários</h4>
        <div class="containerPerfilAvaliacoes container border rounded-4 p-md-5 p-3 mt-md-5 mt-3 ">
          <div className='container'>
            <div class="card">
              <div class="card-header">
                Usuário
              </div>
              <div class="card-body">

                <p class="card-text">comentário</p>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Responder</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avaliacoes