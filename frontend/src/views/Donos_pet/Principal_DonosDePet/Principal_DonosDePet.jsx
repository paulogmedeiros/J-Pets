import { useEffect, useState } from 'react'
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

  useEffect(() => {

    document.title = "Página inicial"
  })

  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cachorro
                </a>
                <ul className="dropdown-menu">
                  <li className='dropend'>
                    <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">
                      Produtos
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="" className="dropdown-item">Teste 1</a></li>
                      <li><a href="" className="dropdown-item">Teste 2</a></li>
                      <li><a href="" className="dropdown-item">Teste 3</a></li>
                      <li><a href="" className="dropdown-item">Teste 4</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="anuncioPagInicial container text-center mt-5 border rounded-5 p-5 shadow-sm p-3 mb-5 rounded mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="text-center">
              <img src={imgAnuncio} width={400} height={500} className="img-fluid rounded" alt="Anúncio" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center mt-md-5">
              <h1 className='fw-bold fs-1'>Seja um parceiro</h1>
              <h5>Tenha seu trabalho divulgado aqui!</h5>
              <p>Até <span className='text-warning fw-bold'>50% OFF</span> na primeira mensalidade!</p>
            </div>
            <a className="btnSaibaMais btn" href="/cadastro/empresa" role="button">Saiba mais <span><img src={iconeFlecha} width={20} alt="Saiba mais" /></span></a>
          </div>
        </div>
      </div>

      <div className='text-center m-3'>
        <h2 className='mb-4 mt-5'>Alguns dos nossos serviços</h2>
        <div className="row">

          <div className="col-md-3">
            <div className="card mb-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img src={imgDogWalking} className="card-img-top" alt="Dog Walking" />
              <div className="card-body">
                <h5 className="card-title">Pet Walking</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="card mb-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img src={imgVeterinario} className="card-img-top" alt="Veterinário" />
              <div className="card-body">
                <h5 className="card-title">Veterinários</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img src={imgRacao} className="card-img-top" alt="Ração" />
              <div className="card-body">
                <h5 className="card-title">Produtos diversos</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img src={imgServicos} className="card-img-top" alt="Serviços" />
              <div className="card-body">
                <h5 className="card-title">Pet Care</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Principal_DonosDePet;