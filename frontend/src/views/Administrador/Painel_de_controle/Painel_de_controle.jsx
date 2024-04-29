import React from 'react'
import logoJPets_adm from './img/logoJPets.png'
import './Painel_de_controle.css'
import pesquisaIcone_adm from './img/pesquisa_icone.svg'
function Painel_de_controle() {
    return (
        // Container geral para propriedades de fundo
        <div className="admPainel">
            <nav class="admNavbar navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logoJPets_adm} alt="" srcset="" width={50} height={50} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <div class="dropdown">
                                    <button class="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        P.G.
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Meu perfil</a></li>
                                        <li><a class="dropdown-item" href="#">Sair</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Conteúdo principal  */}
            <div class="container text-center position-absolute top-50 start-50 translate-middle">
                <div class="row">

                    {/* Menu lateral */}
                    <div class="col-4">
                        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                            <button type="button" class="btn btn-secondary">Empresas</button>
                            <button type="button" class="btn btn-secondary">Produtos</button>
                            <button type="button" class="btn btn-secondary">Serviços</button>
                        </div>
                    </div>

                    {/* Tabela */}
                    <div class="col-8">
                        <p className='d-flex justify-content-start'>Todas as empresas</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Pesquisar empresa" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text" id="basic-addon2"><img src={pesquisaIcone_adm} alt="" srcset="" width={20} color='back' /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Painel_de_controle