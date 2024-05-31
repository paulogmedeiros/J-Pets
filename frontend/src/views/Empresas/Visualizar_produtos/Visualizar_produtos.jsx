import React from 'react'
import './Visualizar_produtos.css'
import logoJPets from './img/logoJPets.png'
import iconePesquisa from './img/iconePesquisa.svg'

function Visualizar_produtos() {
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


      <div className="">
        <div className="">
          <div class="container text-center mt-5 border p-4 rounded-4">
            <div class="row ">
              <div class="col-6 text-start">
                <h2>Produtos</h2>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Pesquisar produtos" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <span class="input-group-text bg-warning" id="basic-addon2"><img src={iconePesquisa} width={20} /></span>
                </div>
              </div>
            </div>
            <table class="container mt-1 p-4 border table table-striped">
              <thead className='tabelaProdutosEmpresas'>
                <tr>
                  <th scope="col">Produtos</th>
                  <th scope="col">Marcas</th>
                  <th scope="col">Modelos</th>
                  <th scope="col">Animais</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visualizar_produtos