import React from 'react'
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'
import iconeUsuarioLogin from './img/icone_usuarioLogin.svg'
import './Principal_DonosDePet.css'
import iconeFlecha from './img/icone_flechaSaibaMais.svg'
import imgAnuncio from './img/img_anuncio.png'
import imgDogWalking from './img/dogWalking.svg'
import imgRacao from './img/racao.svg'
import imgVeterinario from './img/veterinario.svg'
import imgServicos from './img/servicos.svg'

function Principal_DonosDePet() {
  return (
    <>
      {/* Inicio da barra de navegação */}
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

      {/* Imagem de anúncio */}
      <div class="anuncioPagInicial container text-center mt-5 border rounded-5 p-5 mb-5">
        <div class="row">
          <div class="col-md-6">
            <div class="text-center">
              <img src={imgAnuncio} width={400} height={500} class="img-fluid rounded" />
            </div>
          </div>
          <div class="col-md-6">
            <div className="text-center mt-md-5">
              <h1 className='fw-bold fs-1'>Seja um parceiro</h1>
              <h5>Tenha seu trabalho divulgado aqui!</h5>
              <p>Até <span className='text-warning fw-bold'>50% OFF</span> na primeira mensalidade!</p>
            </div>
            <a class="btnSaibaMais btn" href="#" role="button">Saiba mais <span><img src={iconeFlecha} width={20} /></span></a>
          </div>
        </div>
      </div>

      {/* Exibição de serviços */}
      <div className='text-center m-3'>
        <h2 className='mb-4 mt-5'>Alguns dos nossos serviços</h2>
        <div class="row">
          <div class="col-md-3">
            <div class="card mb-3">
              <img src={imgDogWalking} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Pet Walking</h5>
                  <p class="card-text"></p>

                </div>
            </div>
          </div>
          <div class="col-md-3">
          <div class="card mb-3">
              <img src={imgVeterinario} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Veterinários</h5>
                  <p class="card-text"></p>

                </div>
            </div>
          </div>
          <div class="col-md-3">
          <div class="card mb-3">
              <img src={imgRacao} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Produtos diversos</h5>
                  <p class="card-text"></p>

                </div>
            </div>
          </div>
          <div class="col-md-3">
          <div class="card">
              <img src={imgServicos} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Pet Care</h5>
                  <p class="card-text"></p>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Principal_DonosDePet