import React from 'react'
import logoJPets from './img/logoJPets.png'
import './CadastroPerfilProfissional.css'
function CadastroPerfilProfissional() {
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

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3 text-center mt-md-5 mb-5 ">
            <div class="list-group">

              <a href="/empresas/perfil" class="list-group-item list-group-item-action ">Geral</a>
              <a href="/empresas/cadastroPerfil" class="list-group-item list-group-item-action active">Cadastrar perfil</a>
              <a href="/empresas/cancelarAssinatura" class="list-group-item list-group-item-action">Cancelar assinatura</a>
              <a href="/empresas/desativar" class="list-group-item list-group-item-action">Desativar conta</a>
            </div>
          </div>

          <div class="col-md-9 container col-11 text-center ">
            <h1 className='perfilProfissionalTitulo text-md-start'>Cadastre seu perfil</h1>

            <div class="row mt-3  rounded-3 p-3 border rounded-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <h3 className='text-start'>Jamille Galazi</h3>
              <div class="col-md-3">
                <div class="mb-3 text-start">
                  <label for="exampleFormControlInput1" class="form-label">CEP</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div class="col-md-5">
                <div class="mb-3 text-start">
                  <label for="exampleFormControlInput1" class="form-label">Rua</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div class="col">
                <div class="mb-3 text-start">
                  <label for="exampleFormControlInput1" class="form-label">Bairro</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col-md-4">
                <div class="mb-3 text-start">
                  <label for="exampleFormControlInput1" class="form-label">Cidade</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div class="col-md-2">
                <div class="mb-3 text-start">
                  <label for="exampleFormControlInput1" class="form-label">UF</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3 text-start">
                  <label for="exampleFormControlInput1" class="form-label">Contato</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              </div>
              <h4 className='text-start'>Funcionamento</h4>
              <div class="container text-center">
                <div class="row">
                  <div class="col-md-6">
                    <p>Horário</p>
                    <div class="container text-center">
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Início</label>
                            <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                          </div>
                        </div>
                        <div class="col">
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Fim</label>
                            <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <p>Dias</p>
                    <div class="container text-center">
                      <div class="row">
                        <div class="col">
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Início</label>
                            <select class="form-select" aria-label="Default select example">
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

                        <div class="col">
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Fim</label>
                            <select class="form-select" aria-label="Default select example">
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