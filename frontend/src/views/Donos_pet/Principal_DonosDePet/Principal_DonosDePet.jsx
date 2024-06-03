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
      <nav className="navbarDonoDePet navbar navbar-expand-lg ">
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
                <a className="nav-link active" aria-current="page" href="#">Início</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cachorro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gato
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pássaro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Peixe
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
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
      <div className="anuncioPagInicial container text-center mt-5 border rounded-5 p-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="text-center">
              <img src={imgAnuncio} width={400} height={500} className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center mt-md-5">
              <h1 className='fw-bold fs-1'>Seja um parceiro</h1>
              <h5>Tenha seu trabalho divulgado aqui!</h5>
              <p>Até <span className='text-warning fw-bold'>50% OFF</span> na primeira mensalidade!</p>
            </div>
            <a className="btnSaibaMais btn" href="#" role="button">Saiba mais <span><img src={iconeFlecha} width={20} /></span></a>
          </div>
        </div>
      </div>

      {/* Exibição de serviços */}
      <div className='text-center m-3'>
        <h2 className='mb-4 mt-5'>Alguns dos nossos serviços</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-3">
              <img src={imgDogWalking} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Pet Walking</h5>
                  <p className="card-text"></p>

                </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card mb-3">
              <img src={imgVeterinario} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Veterinários</h5>
                  <p className="card-text"></p>

                </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card mb-3">
              <img src={imgRacao} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Produtos diversos</h5>
                  <p className="card-text"></p>

                </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card">
              <img src={imgServicos} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Pet Care</h5>
                  <p className="card-text"></p>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Principal_DonosDePet