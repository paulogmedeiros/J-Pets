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
                  <li><a className="dropdown-item" href="/usuario/buscar">Produtos</a></li>
                  <li><a className="dropdown-item" href="/">Serviços</a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gato
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscar">Produtos</a></li>
                  <li><a className="dropdown-item" href="/">Serviços</a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pássaro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscar">Produtos</a></li>
                  <li><a className="dropdown-item" href="/">Serviços</a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Peixe
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscar">Produtos</a></li>
                  <li><a className="dropdown-item" href="/">Serviços</a></li>

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
                <li><a className="dropdown-item" href="/usuario/perfil">Meu perfil</a></li>
                <li><a className="dropdown-item text-warning" href="/">Sair</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className='position-absolute top-50 start-50 translate-middle'>
        
        {/* Título */}
        <div className="container text-center mt-3 ">
          <h3 className='mb-5'>Empresas que trabalham com o modelo <span className='text-warning'>(modelo)</span></h3>

          {/* Empresas */}
          <div className="col-md-6 d-flex border rounded-4 w-auto w-auto p-3 p-md-4 bg-body-secondary mb-5">

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
            <button type="button" className="btnDisconto btn btn-sm ms-md-5 rounded-5"><img src={imgDesconto} /></button>
          </div>

          <div className="col-md-6 d-flex border rounded-4  w-auto w-auto p-3 p-md-4 p-3 bg-body-secondary mb-5">

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
            <button type="button" className="btnDisconto btn btn-sm ms-md-5 rounded-5"><img src={imgDesconto} /></button>
          </div>
        </div>

        {/* API
            <div className="col-md-6">
              <div className='apiTela border rounded-4'>
                <img src={mapaImg} width={600} height={400} className='img-fluid rounded-4' />
              </div>
            </div> */}
      </div>


    </>
  )
}

export default Empresas_Mapa