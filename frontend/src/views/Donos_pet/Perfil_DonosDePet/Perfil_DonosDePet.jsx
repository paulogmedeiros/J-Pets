import { useState, useEffect } from 'react'
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'
import iconeUsuarioLogin from './img/icone_usuarioLogin.svg'
import './Perfil_DonosDePet.css'
import axios from 'axios'
function Perfil_DonosDePet() {

  const [servicos, setServicos] = useState([]);
  const [email, setEmail] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"))
  const token = JSON.parse(localStorage.getItem("token"))
  const usuario_id = decodedToken['usuario_id']

  useEffect(() => {
    document.title = "Página inicial";
    buscarServicos(); // Chamada inicial para buscar os serviços
    pegarEmail()
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

  async function pegarEmail() {
    try {

      if (!usuario_id) {
        window.location.href = './'
      }

      const resposta = await fetch(process.env.REACT_APP_URL_API + '/usuario/' + usuario_id, {
        method: 'GET',
        headers: {
          'x-access-token': token
        }
      })

      if (!resposta.ok) {
        throw new Error('HTTP Erro' + resposta.status)
      }

      const dados = await resposta.json()
      console.log(dados)
      setEmail(dados.email)
      setNomeUsuario(dados.tutores_pets.nome)
    } catch (error) {
      throw new Error('HTTP Erro' + error)
    }
  }

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

  const buscarServicos = () => {
    axios.get('http://localhost:3333/servicos')
      .then(response => {
        setServicos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar serviços:', error);
      });
  };

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
                  <span className='d-inline-block' style={{ maxWidth: '100px' }}>
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

      <h1 className='perfilUsuarioTitulo fw-semibold fs-1  mt-5 text-center'>Meu Perfil</h1>

      <div className="position-absolute top-50 start-50 translate-middle border rounded-4 p-5 w-50 mt-5 mt-md-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">

        <div className="text-center ">
          <div className="row">
            <div className="col-md-6">
              <h1 className='fs-2 fw-semibold mb-5 mb-md-0'>{nomeUsuario}</h1>
              <hr />
              <input className="form-control mb-3 " type="text" value={email} aria-label="Disabled input example" disabled readonly></input>

              <input className="form-control mb-3 " type="text" value="********" aria-label="Disabled input example" disabled readonly />

              <a className="mb-5 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/senha/alteracao">
                Alterar senha
              </a>
            </div>

            <div className="col-md-6 mt-3 mt-md-0">
              <button type="button" className="btn btn-danger">Desativar conta</button>
            </div>
          </div>
        </div>
      </div>
    </ >
  )
}

export default Perfil_DonosDePet