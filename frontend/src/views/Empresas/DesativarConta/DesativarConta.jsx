import React from 'react'
import logoJPets from './img/logoJPets.png'
import './DesativarConta.css'
function DesativarConta() {
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
              <div class="dropdown me-5 ">
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
            </ul>
          </div>
        </div>
      </nav>

      {/* Barra de navegação lateral */}
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3 text-center mt-md-5 mb-5 ">
            <div class="list-group">

              <a href="/empresas/perfil" class="list-group-item list-group-item-action ">Geral</a>
              <a href="/empresas/cadastroPerfil" class="list-group-item list-group-item-action">Cadastrar perfil</a>
              <a href="/empresas/cancelarAssinatura" class="list-group-item list-group-item-action">Cancelar assinatura</a>
              <a href="/empresas/desativar" class="list-group-item list-group-item-action">Desativar/ativar conta</a>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default DesativarConta