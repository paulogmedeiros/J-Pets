import { useState, useEffect } from 'react'
import './Buscar_produtoOuServico.css'
import iconeVoltar from './img/iconeVoltar.svg'
import logoJPets from './img/logoJPets.png'
import imgBusca from './img/imgBusca.svg'
import iconeCoracao from './img/icone_coracao.svg'
function Buscar_produtoOuServico() {

  const [animal, setAnimal] = useState('')

  useEffect(() => {
    document.title = "Busca | Produtos"
  })
  
  return (
    <>
      {/* Barra de navegação da página */}
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
                <a
                onClick={(e) => setAnimal('Cachorro')}
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Cachorro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscar">Produtos</a></li>
                <li><a className="dropdown-item" href="/">Serviços</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                onClick={(e) => setAnimal('Gato')}
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Gato
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscar">Produtos</a></li>
                <li><a className="dropdown-item" href="/">Serviços</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                onClick={(e) => setAnimal('Pássaro')}
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Pássaro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscar">Produtos</a></li>
                <li><a className="dropdown-item" href="/">Serviços</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                onClick={(e) => setAnimal('Peixe')}
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
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

      <a href="/usuario/principal" type="button" class="btnVoltarBusca btn m-5 rounded-5">
        <span>
          <img src={iconeVoltar} width={20} height={20} />
        </span>
        Voltar
      </a>

      <div className="container">

        {/* container para formulario e imagem */}
        <div className="row justify-content-center col-12 col-md-8 position-absolute top-50 start-50 translate-middle border rounded-4 bg-light shadow-sm mb-5 bg-body-tertiary rounded">

          {/* container para formulario */}
          <div className="col-md-6 d-flex-md-5 mt-5 mt-md-0 p-5">

            {/* Título */}
            <p className="tituloBusca fs-1 fw-semibold text-center mb-0 ">Buscar produto</p>
            <hr className='mb-md-5' />

            {/* Input para inserir o nome do modelo */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="" readOnly />
              <label for="floatingInput">{animal}</label>
            </div>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                className="form-select "
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>
                <option>teste</option>
              </select>
              <label for="floatingSelect">Produto</label>
            </div>

            {/* lista suspensa para selecionar o produto */}
            <div className="form-floating mb-3 mb-md-3">

              {/* lista suspensa para selecionar o produto correspondente ao animal */}
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>
                <option>teste</option>

              </select>
              <label htmlFor="floatingSelect">Marca</label>
            </div>

            {/* lista suspensa para selecionar a marca */}
            <div className="form-floating mb-3 mb-md-3">

              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">

                <option value="">Selecione</option>
                <option >teste</option>
              </select>
              <label for="floatingSelect">Modelo</label>
            </div>

            <button
              className="btnBuscar border btn w-100"
              role="button">Buscar</button>

          </div>
          <div className="imgBusca col-md-6 d-flex mt-3 mt-md-0 rounded-4 p-3">
            <img src={imgBusca} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buscar_produtoOuServico