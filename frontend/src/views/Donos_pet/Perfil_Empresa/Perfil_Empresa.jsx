import React from 'react'
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'
import iconeUsuarioLogin from './img/icone_usuarioLogin.svg'
import imgEstrela from './img/imgEstrela.svg'
import mapaImg from './img/mapaImg.png'

function Perfil_Empresa() {
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

      {/* conteúdo principal */}
      <div>
        
        <div class="row g-0 text-center mt-5 mt-md-2">
          <div className='p-2'>
            <img src={logoJPets} width={100} height={100} />
            <p className='fs-3'>Nome da Empresa</p>
            <img src={imgEstrela} width={25} />
            <img src={imgEstrela} width={25} />
            <img src={imgEstrela} width={25} />
            <img src={imgEstrela} width={25} />
            <img src={imgEstrela} width={25} />
            <p><span className='text-success fw-semibold'>Abertos: </span>seg-sab</p>
            <p><span className='text-danger fw-semibold'>Fechados: </span>dom</p>
          </div>


          <div class="col-sm-6 col-md-5 m-md-5 mt-5 border rounded-4">
            <p className='fs-4'>Comentários</p>
            <div className='p-3'>
            <div>
            </div>

              <div class="form-floating ">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Inserir comentário</label>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 mt-5">
            <img src={mapaImg} width={500} height={400} className='img-fluid rounded-3'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil_Empresa