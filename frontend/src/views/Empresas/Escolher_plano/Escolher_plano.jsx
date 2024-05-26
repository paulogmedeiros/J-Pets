import React from 'react'
import logoJPets from './img/logoJPets.png'
import iconChecklist from './img/checklist.svg'
import './Escolher_plano.css'
function Escolher_plano() {
  return (

    <>

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


      <h1 className='text-center mt-5 fs-1 fw-bold'>Planos e preços</h1>
      <div className='container col-md-5 col-10 mt-3 justify-content-center border border-2 border-warning  p-3 rounded-4'>
        <div className="text-center">
          <h3>Profissional</h3>
          <p >Pacote especial</p>
          <div className='border border-dark'></div>
        </div>
        <div className="text-center mt-3 mb-5 ">
          <img src={iconChecklist} width={25} /><span className='ms-3'>Serviços e produtos divulgados pelo site</span><div class="w-100"></div>
          <img src={iconChecklist} width={25} /><span className='ms-3'>Maior visibilidade para o seu trabalho</span><div class="w-100"></div>
          <img src={iconChecklist} width={25} /><span className='ms-3'>Cupons de desconto para seu cliente</span><div class="w-100"></div>
          <img src={iconChecklist} width={25} /><span className='ms-3'>Suporte exclusivo </span><div class="w-100"></div>
        </div>

        <div className="text-center mt-5">
          <h2 className='fw-bold'>R$300,00/Mês</h2>

          <a href='/empresas/pagamento' type="button" class="btnSelecionarPlano btn mt-md-2 mt-2">Selecionar plano</a>
        </div>
      </div>
    </>
  )
}

export default Escolher_plano