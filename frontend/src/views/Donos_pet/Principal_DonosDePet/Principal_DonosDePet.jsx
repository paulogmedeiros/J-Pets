import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logoJPets from './img/logoJPets.png';
import iconeCoracao from './img/icone_coracao.svg';
import iconeFlecha from './img/icone_flechaSaibaMais.svg';
import imgAnuncio from './img/img_anuncio.png';
import imgDogWalking from './img/dogWalking.svg';
import imgRacao from './img/racao.svg';
import imgVeterinario from './img/veterinario.svg';
import imgServicos from './img/servicos.svg';
import './Principal_DonosDePet.css';

function Principal_DonosDePet() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    document.title = "Página inicial";
    buscarServicos(); // Chamada inicial para buscar os serviços

    // JavaScript para habilitar os submenus
    const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
    dropdownSubmenus.forEach(submenu => {
      submenu.addEventListener('mouseenter', function () {
        this.classList.add('show');
        this.querySelector('.dropdown-menu').classList.add('show');
      });
      submenu.addEventListener('mouseleave', function () {
        this.classList.remove('show');
        this.querySelector('.dropdown-menu').classList.remove('show');
      });
    });
  }, []);

  const buscarServicos = () => {
    axios.get('http://localhost:3333/servicos')
      .then(response => {
        setServicos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar serviços:', error);
      });
  };

  async function visualizarEmpresasServicos(id){
    const sesaoBusca = {
      titulo: 'serviço',
      id: id,
      tipo: 'SVC'
    }
    console.log(sesaoBusca)
    localStorage.removeItem(sesaoBusca)
    localStorage.setItem("sesaoBusca", JSON.stringify(sesaoBusca));
    window.location.href = '/usuario/visualizarEmpresas'
  }

  // Filtra os serviços por animal
  const filtrarServicosPorAnimal = (animalId) => {
    return servicos.filter(servico => servico.animal_id === animalId);
  };

  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
  }
  return (
    <>
      <nav className="navbarDonoDePet navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo do projeto */}
          <a className="navbar-brand" href="/usuario/principal">
            <img src={logoJPets} width={45} height={45} alt="Logo" />
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
                  <li><a className="dropdown-item" href="/usuario/buscarProdutos/cachorro">Produtos</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Serviços</a>
                    <ul className="dropdown-menu">
                      {filtrarServicosPorAnimal(1).map(servico => (
                        <li key={servico.id}><a className="dropdown-item" onClick={(e) => {visualizarEmpresasServicos(servico.id)}}>{servico.nome}</a></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gato
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscarProdutos/gato">Produtos</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Serviços</a>
                    <ul className="dropdown-menu">
                      {filtrarServicosPorAnimal(2).map(servico => (
                        <li key={servico.id}><a className="dropdown-item" onClick={(e) => {visualizarEmpresasServicos(servico.id)}}>{servico.nome}</a></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Adicione outros animais conforme necessário */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pássaro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscarProdutos/passaro">Produtos</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Serviços</a>
                    <ul className="dropdown-menu">
                      {filtrarServicosPorAnimal(3).map(servico => (
                        <li key={servico.id}><a className="dropdown-item" onClick={(e) => {visualizarEmpresasServicos(servico.id)}}>{servico.nome}</a></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Peixe
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscarProdutos/peixe">Produtos</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Serviços</a>
                    <ul className="dropdown-menu">
                      {filtrarServicosPorAnimal(4).map(servico => (
                        <li key={servico.id}><a className="dropdown-item" onClick={(e) => {visualizarEmpresasServicos(servico.id)}}>{servico.nome}</a></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='d-flex justify-content-end'>
            <div className=''>
              <span>
                {/* <img src={iconeCoracao} width={40} height={40} alt="Ícone Coração" /> */}
              </span>
            </div>
            <div className="dropdown me-5">
              <button className="btnPerfilEmpresa btn btn-secondary rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className='d-inline-block mt-2 text-truncate' style={{ maxWidth: '100px' }}>
                  {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
                </span>
              </button>
              <ul className="dropdown-menu">
                <a className="nav-link disabled ms-3" aria-disabled="true">
                  <span className='d-inline-block text-truncate' style={{ maxWidth: '100px' }}>
                    {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
                  </span>
                </a>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/usuario/perfil">Meu perfil</a></li>
                <li><button className="dropdown-item text-warning" onClick={logOff}>Sair</button></li>
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
          <div className="col-md-3">
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
              <img src={imgServicos} className="card-img-top" alt="Serviços" />
              <div className="card-body">
                <h5 className="card-title">Pet Care</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <img src={imgRacao} className="card-img-top" alt="Ração" />
              <div className="card-body">
                <h5 className="card-title">Produtos</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Principal_DonosDePet;
