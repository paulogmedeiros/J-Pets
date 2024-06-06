import React from 'react'
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'
import iconeUsuarioLogin from './img/icone_usuarioLogin.svg'
import imgEstrela from './img/imgEstrela.svg'

function Favoritos() {
  return (
    <div>
      <nav className="navbarDonoDePet navbar navbar-expand-lg ">
        <div className="container-fluid">

          {/* Logo do projeto */}
          <a className="navbar-brand" href="/usuario/principal">
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
                <a className="nav-link active" aria-current="page" href="/usuario/principal">Início</a>
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
            <div className="dropdown me-5">
              <button className="btnPerfilEmpresa btn btn-secondary rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className='d-inline-block mt-2 text-truncate' style={{ maxWidth: '100px' }}>
                  {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
                </span>
              </button>
              <ul className="dropdown-menu">
                <a className="nav-link disabled ms-3" aria-disabled="true"> <span className='d-inline-block ' style={{ maxWidth: '100px' }}>
                  {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
                </span>
                </a>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Meu perfil</a></li>
                <li><a className="dropdown-item text-warning" href="/">Sair</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <h1 className='m-5 container'>Favoritos</h1>

      <div className='container text-center'>
        <div className="row">
          <div className="col">
            <div className="card" >
              <img src={logoJPets} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"><img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={logoJPets} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"><img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={logoJPets} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"><img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                  <img src={imgEstrela} width={25} />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={logoJPets} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"><img src={imgEstrela} width={25} />
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