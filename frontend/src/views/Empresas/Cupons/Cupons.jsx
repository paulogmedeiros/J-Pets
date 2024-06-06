import React from 'react'
import './Cupons.css'
import logoJPets from './img/logoJPets.png'
import iconePorcentagem from './img/porcentagem.png'
function Cupons() {
  return (
    <div>

      <div>
        {/* Inicio da barra de navegação */}
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

      </div>

      {/* Área de descontos */}

      <div className="container text-center mt-5 pt-md-5">

        <div className="row">
          <div className="col-md-6">
            <h1 className='tituloAreaDescontos fw-semibold'>Área de descontos</h1>
            <div className='container border rounded-3'>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label mt-3">Nome do desconto</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ex.: Paulo" />
              </div>

              <select className="form-select mb-3 w-100 " aria-label="Default select example">
                <option selected>Selecione</option>
                <option value="1">5%</option>
                <option value="2">10%</option>
                <option value="3">15%</option>
              </select>

              <button className="btnGerarCupom btn mb-5 mt-5" type="submit">Gerar cupom</button>
            </div>
          </div>

          <div className="col-md-6 mt-5 mt-md-0 mb-3">
            <h1 className='tituloCupom fw-semibold '>Cupom gerado</h1>
            <div className='container border rounded-3 p-md-5 p-4'>
              <div className='containerCupomGerado rounded-3 p-md-2'>

                <div className="text-end pb-5 ms-5">
                  <button type="button" className="btn-close" aria-label="Close"></button>
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