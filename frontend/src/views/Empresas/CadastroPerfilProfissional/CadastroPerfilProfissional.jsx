import React from 'react'
import logoJPets from './img/logoJPets.png'
import './CadastroPerfilProfissional.css'
function CadastroPerfilProfissional() {
  return (
    <div>
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

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 text-center mt-md-5 mb-5 ">
            <div className="list-group">

              <a href="/empresas/perfil" className="list-group-item list-group-item-action ">Geral</a>
              <a href="/empresas/cadastroPerfil" className="list-group-item list-group-item-action active">Cadastrar perfil</a>
              <a href="/empresas/cancelarAssinatura" className="list-group-item list-group-item-action">Cancelar assinatura</a>
              <a href="/empresas/desativar" className="list-group-item list-group-item-action">Desativar conta</a>
            </div>
          </div>

          <div className="col-md-9 container col-11 text-center ">
            <h1 className='perfilProfissionalTitulo text-md-start'>Cadastre seu perfil</h1>

            <div className="row mt-3  rounded-3 p-3 border rounded-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <h3 className='text-start'>Jamille Galazi</h3>
              <div className="col-md-3">
                <div className="mb-3 text-start">
                  <label for="exampleFormControlInput1" className="form-label">CEP</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-3 text-start">
                  <label for="exampleFormControlInput1" className="form-label">Rua</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 text-start">
                  <label for="exampleFormControlInput1" className="form-label">Bairro</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md-4">
                <div className="mb-3 text-start">
                  <label for="exampleFormControlInput1" className="form-label">Cidade</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="mb-3 text-start">
                  <label for="exampleFormControlInput1" className="form-label">UF</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 text-start">
                  <label for="exampleFormControlInput1" className="form-label">Contato</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <h4 className='text-start'>Funcionamento</h4>
              <div className="container text-center">
                <div className="row">
                  <div className="col-md-6">
                    <p>Horário</p>
                    <div className="container text-center">
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Início</label>
                            <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Fim</label>
                            <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Dias</p>
                    <div className="container text-center">
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Início</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Selecione</option>
                              <option value="1">Segunda</option>
                              <option value="2">Terça</option>
                              <option value="3">Quarta</option>
                              <option value="3">Quinta</option>
                              <option value="3">Sexta</option>
                              <option value="3">Sábado</option>
                              <option value="3">Domingo</option>
                            </select>
                          </div>
                        </div>

                        <div className="col">
                          <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Fim</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Selecione</option>
                              <option value="1">Segunda</option>
                              <option value="2">Terça</option>
                              <option value="3">Quarta</option>
                              <option value="3">Quinta</option>
                              <option value="3">Sexta</option>
                              <option value="3">Sábado</option>
                              <option value="3">Domingo</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroPerfilProfissional