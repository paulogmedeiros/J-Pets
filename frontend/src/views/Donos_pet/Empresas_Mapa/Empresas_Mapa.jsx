import React from 'react'
import './Empresas_Mapa.css'
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'
import iconeUsuarioLogin from './img/icone_usuarioLogin.svg'
import mapaImg from './img/mapaImg.png'
import imgEstrela from './img/imgEstrela.svg'
import imgDesconto from './img/desconto_botao.svg'
function Empresas_Mapa() {
  return (

    <>
      {/* Barra de navegação da página */}
      <nav class="navbarDonoDePet navbar navbar-expand-lg ">
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
                  Cachorro
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gato
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pássaro
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Peixe
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='d-flex justify-content-end'>
            <div className=''>
              <span>
                <img src={iconeCoracao} width={40} height={40} />
              </span>
            </div>
            <div className=''>
              <span>
                <a href="/"><img src={iconeUsuarioLogin} width={40} height={40} /></a>
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div>

        {/* Título */}
        <div class="container text-center mt-3 pt-5">
          <h3>Empresas que trabalham com o modelo <span className='text-warning'>(modelo)</span></h3>

          {/* Empresas */}
          <div class="row mt-5">
            <div class="col-md-6">
              <div class="col-md-6 d-flex border rounded-4 w-auto w-auto p-3 p-md-4 bg-body-secondary mb-5">

                <img src={logoJPets} width={70} height={70} className='img-fluid d-flex' />

                <div className="flex-column">
                  <p className='ms-md-3 d-flex'>Nome da empresa</p>
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <a href='' className='ms-md-4 d-flex'>Ver perfil</a>
                </div>
                <div className="col-md-3"></div>
                <button type="button" class="btnDisconto btn btn-sm ms-md-5 rounded-5"><img src={imgDesconto} /></button>
              </div>

              <div class="col-md-6 d-flex border rounded-4  w-auto w-auto p-3 p-md-4 p-3 bg-body-secondary mb-5">

                <img src={logoJPets} width={70} height={70} className='img-fluid d-flex' />

                <div className="flex-column">
                  <p className='ms-md-3 d-flex'>Nome da empresa</p>
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <a href='' className='ms-md-4 d-flex'>Ver perfil</a>
                </div>
                <div className="col-md-3"></div>
                <button type="button" class="btnDisconto btn btn-sm ms-md-5 rounded-5"><img src={imgDesconto} /></button>
              </div>
            </div>

            {/* API */}
            <div class="col-md-6">
              <div className='apiTela border rounded-4'>
                <img src={mapaImg} width={600} height={400} className='img-fluid rounded-4'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Empresas_Mapa