import React from 'react'
import './Alterar_senha.css'
import icone_senha from './img/icone_senha.svg'
import logoJPets from './img/logoJPets.png'
function Alterar_senha_empresa() {
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

        <div className="row justify-content-center col-12 ps-4 border rounded-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded col-md-5 position-absolute top-50 start-50 translate-middle">

          <div className="col-md-8 d-flex-md-5">

            <div className='text-center'>
              <img src={icone_senha} width={90} height={90} />
            </div>

            <p className="AlteracaoSenhaEmpresasTitulo fs-1 fw-bold text-center mb-2 mb-md-2 mt-3">Alteração de senha</p>
            <p className='text-center'>Altere sua senha.</p>

            <div className="form-floating mt-md-3 mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Senha atual</label>
            </div>

            <div className="form-floating mt-md-3 mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Nova senha</label>
            </div>

            <div className="form-floating mt-md-3 mb-4">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Confirmação da nova senha</label>
            </div>

            <a className="btnAlteracaoSenhaEmpresas btn w-100" href="#" role="button">Confirmar</a>

            <p className="text-body-dark text-center mt-3">
              <a href="#" className="cancelarAlterarSenhaEmpresas link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Voltar à tela de login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Alterar_senha_empresa