import React from 'react'
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'
import iconeUsuarioLogin from './img/icone_usuarioLogin.svg'
import imgEstrela from './img/imgEstrela.svg'

function Favoritos() {
  return (
    <div>
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

      <h1 className='m-5 container'>Favoritos</h1>
      
      <div className='container text-center'>
        <div class="row">
          <div class="col">
            <div class="card" >
              <img src={logoJPets} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"><img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src={logoJPets} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"><img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src={logoJPets} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"><img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src={logoJPets} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"><img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favoritos