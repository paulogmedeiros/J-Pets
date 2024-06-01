import React from 'react'
import './Cupons.css'
import logoJPets from './img/logoJPets.png'
import iconePorcentagem from './img/porcentagem.png'
function Cupons() {
  return (
    <div>

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

      </div>

      {/* Área de descontos */}

      <div class="container text-center mt-5 pt-md-5">

        <div class="row">
          <div class="col-md-6">
            <h1 className='tituloAreaDescontos fw-semibold'>Área de descontos</h1>
            <div className='container border rounded-3'>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label mt-3">Nome do desconto</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ex.: Paulo" />
              </div>

              <select class="form-select mb-3 w-100 " aria-label="Default select example">
                <option selected>Selecione</option>
                <option value="1">5%</option>
                <option value="2">10%</option>
                <option value="3">15%</option>
              </select>

              <button class="btnGerarCupom btn mb-5 mt-5" type="submit">Gerar cupom</button>
            </div>
          </div>

          <div class="col-md-6 mt-5 mt-md-0 mb-3">
            <h1 className='tituloCupom fw-semibold '>Cupom gerado</h1>
            <div className='container border rounded-3 p-md-5 p-4'>
              <div className='containerCupomGerado rounded-3 p-md-2'>

                <div className="text-end pb-5 ms-5">
                  <button type="button" class="btn-close" aria-label="Close"></button>
                </div>

                <h1 className='pb-5'>PAULO5</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cupons