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
import { Loader } from '@mantine/core';
import { Menu, NavLink } from "@mantine/core";

function Principal_DonosDePet() {

  const [hovered, setHovered] = useState(false);
  const [hoveredProducts, setHoveredProducts] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);
  const [hoveredProduct1, setHoveredProduct1] = useState(false);
  const [hoveredProduct2, setHoveredProduct2] = useState(false);
  const [hoveredMarca1, setHoveredMarca1] = useState(false);
  const [hoveredMarca2, setHoveredMarca2] = useState(false);

  useEffect(() => {
    document.title = "Página inicial"
  })

  async function pegarProdutosEServicos() {
    // Lógica para pegar produtos e serviços
  }

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
                  <li>
                    {/* Itens da barra de navegação */}
                    <div style={{ position: "relative", width: "200px" }}>
                      <NavLink
                        href="#"
                        label="Produtos"
                        onMouseEnter={() => setHoveredProducts(true)}
                        onMouseLeave={() => setHoveredProducts(false)}
                      />
                      {hoveredProducts && (
                        <div
                          onMouseEnter={() => setHoveredProducts(true)}
                          onMouseLeave={() => setHoveredProducts(false)}
                          style={{
                            position: "absolute",
                            width: "200px",
                            top: "0px", // Ajuste aqui para mover os produtos para baixo
                            left: "200px",
                            zIndex: 2,
                            backgroundColor: "white",
                            color: 'black',
                            border: "1px solid #d2d2d2",
                            borderRadius: "8px"
                          }}
                        >
                          <Menu>
                            <NavLink
                              label="Produto 1"
                              onMouseEnter={() => setHoveredProduct1(true)}
                              onMouseLeave={() => setHoveredProduct1(false)}
                            />
                            {hoveredProduct1 && (
                              <div
                                onMouseEnter={() => setHoveredProduct1(true)}
                                onMouseLeave={() => setHoveredProduct1(false)}
                                style={{
                                  position: "absolute",
                                  width: "200px",
                                  top: "10px",
                                  left: "200px",
                                  zIndex: 2,
                                  backgroundColor: "white",
                                  color: 'black',
                                  border: "1px solid #d2d2d2",
                                  borderRadius: "8px"
                                }}
                              >
                                <Menu>
                                  <NavLink
                                    label="Marca 1"
                                    onMouseEnter={() => setHoveredMarca1(true)}
                                    onMouseLeave={() => setHoveredMarca1(false)}
                                  />
                                  {hoveredMarca1 && (
                                    <div
                                      onMouseEnter={() => setHoveredMarca1(true)}
                                      onMouseLeave={() => setHoveredMarca1(false)}
                                      style={{
                                        position: "absolute",
                                        width: "200px",
                                        top: "20px",
                                        left: "200px",
                                        zIndex: 2,
                                        backgroundColor: "white",
                                        color: 'black',
                                        border: "1px solid #d2d2d2",
                                        borderRadius: "8px"
                                      }}
                                    >
                                      <Menu>
                                        <NavLink label="Modelo 1" />
                                        <NavLink label="Modelo 2" />
                                      </Menu>
                                    </div>
                                  )}
                                  <NavLink
                                    label="Marca 2"
                                    onMouseEnter={() => setHoveredMarca2(true)}
                                    onMouseLeave={() => setHoveredMarca2(false)}
                                  />
                                  {hoveredMarca2 && (
                                    <div
                                      onMouseEnter={() => setHoveredMarca2(true)}
                                      onMouseLeave={() => setHoveredMarca2(false)}
                                      style={{
                                        position: "absolute",
                                        width: "200px",
                                        top: "40px",
                                        left: "200px",
                                        zIndex: 2,
                                        backgroundColor: "white",
                                        color: 'black',
                                        border: "1px solid #d2d2d2",
                                        borderRadius: "8px"
                                      }}
                                    >
                                      <Menu>
                                        <NavLink label="Modelo 1" />
                                        <NavLink label="Modelo 2" />
                                      </Menu>
                                    </div>
                                  )}
                                </Menu>
                              </div>
                            )}
                            <NavLink
                              label="Produto 2"
                              onMouseEnter={() => setHoveredProduct2(true)}
                              onMouseLeave={() => setHoveredProduct2(false)}
                            />
                            {hoveredProduct2 && (
                              <div
                                onMouseEnter={() => setHoveredProduct2(true)}
                                onMouseLeave={() => setHoveredProduct2(false)}
                                style={{
                                  position: "absolute",
                                  width: "200px",
                                  top: "50px",
                                  left: "200px",
                                  zIndex: 2,
                                  backgroundColor: "white",
                                  color: 'black',
                                  border: "1px solid #d2d2d2",
                                  borderRadius: "8px"
                                }}
                              >
                                <Menu>
                                  <NavLink
                                    label="Marca 1"
                                    onMouseEnter={() => setHoveredMarca1(true)}
                                    onMouseLeave={() => setHoveredMarca1(false)}
                                  />
                                  {hoveredMarca1 && (
                                    <div
                                      onMouseEnter={() => setHoveredMarca1(true)}
                                      onMouseLeave={() => setHoveredMarca1(false)}
                                      style={{
                                        position: "absolute",
                                        width: "200px",
                                        top: "30px",
                                        left: "200px",
                                        zIndex: 2,
                                        backgroundColor: "white",
                                        color: 'black',
                                        border: "1px solid #d2d2d2",
                                        borderRadius: "8px"
                                      }}
                                    >
                                      <Menu>
                                        <NavLink label="Modelo 1" />
                                        <NavLink label="Modelo 2" />
                                      </Menu>
                                    </div>
                                  )}
                                  <NavLink
                                    label="Marca 2"
                                    onMouseEnter={() => setHoveredMarca2(true)}
                                    onMouseLeave={() => setHoveredMarca2(false)}
                                  />
                                  {hoveredMarca2 && (
                                    <div
                                      onMouseEnter={() => setHoveredMarca2(true)}
                                      onMouseLeave={() => setHoveredMarca2(false)}
                                      style={{
                                        position: "absolute",
                                        width: "200px",
                                        top: "50px",
                                        left: "200px",
                                        zIndex: 2,
                                        backgroundColor: "white",
                                        color: 'black',
                                        border: "1px solid #d2d2d2",
                                        borderRadius: "8px"
                                      }}
                                    >
                                      <Menu>
                                        <NavLink label="Modelo 1" />
                                        <NavLink label="Modelo 2" />
                                      </Menu>
                                    </div>
                                  )}
                                </Menu>
                              </div>
                            )}
                          </Menu>
                        </div>
                      )}
                    </div>
                    <div style={{ position: "relative", width: "200px" }}>
                      <NavLink
                        href="#"
                        label="Serviços"
                        onMouseEnter={() => setHoveredServices(true)}
                        onMouseLeave={() => setHoveredServices(false)}
                      />
                      {hoveredServices && (
                        <div
                          onMouseEnter={() => setHoveredServices(true)}
                          onMouseLeave={() => setHoveredServices(false)}
                          style={{
                            position: "absolute",
                            width: "200px",
                            top: "10px", // Ajuste aqui para mover os serviços para baixo
                            left: "200px",
                            zIndex: 2,
                            backgroundColor: "white",
                            color: 'black',
                            border: "1px solid #d2d2d2",
                            borderRadius: "8px"
                          }}
                        >
                          <Menu>
                            <NavLink label="Serviço 1" />
                            <NavLink label="Serviço 2" />
                          </Menu>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gato
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Produtos</a></li>
                  <li><a className="dropdown-item" href="/">Serviços</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pássaro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Produtos</a></li>
                  <li><a className="dropdown-item" href="/">Serviços</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Peixe
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Produtos</a></li>
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
