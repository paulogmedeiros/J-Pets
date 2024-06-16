import React from 'react'
import logoJPets from './img/logoJPets.png'
import './Principal_Empresas.css'
import imgAnuncioEmpresas from './img/imgAnuncioEmpresas.svg'

function Principal_Empresas() {
  return (
    <>
      <div>
        {/* Inicio da barra de navegação */}
        <nav className="navbarEmpresas navbar navbar-expand-lg">
          <div className="container-fluid">

            {/* Logo do projeto */}
            <a className="navbar-brand" href="/empresas/principal">
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
                <a className="nav-link disabled ms-3" aria-disabled="true"> <span className='d-inline-block ' style={{ maxWidth: '100px' }}>
                  {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
                </span>
                </a>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/empresas/perfil">Meu perfil</a></li>
                <li><a className="dropdown-item text-warning" href="/">Sair</a></li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

      {/* Imagem de anúncio */}
      <div className="anuncioPagInicialEmpresa container text-center mt-5 mb-5">
        <div className="row">

          <div className="col-md-6">
            <div className="text-center mt-md-5">
              <h1 className='fw-bold fs-1'>Seja um parceiro</h1>
              <h5>Tenha seu trabalho divulgado aqui!</h5>
              <p>Até <span className='text-warning fw-bold'>50% OFF</span> na primeira mensalidade!</p>

              <a className="btnSaibaMais btn w-50 mt-md-5 rounded-5" href="/empresas/planos" role="button">Assine já!</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <img src={imgAnuncioEmpresas} width={400} height={500} className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Principal_Empresas