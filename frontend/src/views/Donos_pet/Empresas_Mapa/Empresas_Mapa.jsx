import { useState, useEffect } from 'react'
import './Empresas_Mapa.css'
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'
import iconeUsuarioLogin from './img/icone_usuarioLogin.svg'
import mapaImg from './img/mapaImg.png'
import imgEstrela from './img/imgEstrela.svg'
import imgDesconto from './img/desconto_botao.svg'
import axios from 'axios'

function Empresas_Mapa() {

  const [servicos, setServicos] = useState([]);
  const [empresas, setEmpresas] = useState([])
  const tipo = JSON.parse(localStorage.getItem("sesaoBusca"))?.tipo;
  const id = JSON.parse(localStorage.getItem("sesaoBusca"))?.id;
  const titulo = JSON.parse(localStorage.getItem("sesaoBusca"))?.titulo;

  useEffect(() => {
    document.title = "Visualização";
    buscarServicos(); // Chamada inicial para buscar os serviços                   
    buscaEmpresas()

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

  async function buscaEmpresas() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + '/empresas/' + tipo + '/servicosProdutos/' + id)
      const dados = await resposta.json()
      setEmpresas(dados)
    } catch (error) {

    }
  }

  const visualizarInformaçõesEmpresas = (id) => {
    const sesaoBuscaIdEmpresa = {
      id
    }
    console.log(sesaoBuscaIdEmpresa)
    localStorage.removeItem(sesaoBuscaIdEmpresa)
    localStorage.setItem("sesaoBuscaIdEmpresa", JSON.stringify(sesaoBuscaIdEmpresa));
    window.location.href = '/usuario/perfilEmpresa'
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


      {/* Conteúdo principal */}
      <div className='position-absolute top-50 start-50 translate-middle'>

        {/* Título */}
        <div className="container text-center mt-3 ">
          <h3 className='mb-5'>Empresas que trabalham com o {titulo}</h3>

          {/* Empresas */}
          {empresas.map((empresa) => (
            <div key={empresa.id} className="col-md-6 d-flex border rounded-4 w-auto w-auto p-3 p-md-4 bg-body-secondary mb-5">
              <img src={process.env.REACT_APP_URL_API_IMG+empresa.foto_perfil} width={70} height={70} style={{ borderRadius: "50%" }} className='img-fluid d-flex' alt={empresa.nome_fantasia} />
              <div className="flex-column">
                <p className='ms-md-3 d-flex'>{empresa.nome_fantasia}</p>
                <a 
                className='ms-md-4 d-flex verPerfil'
                onClick={(e) => {
                  visualizarInformaçõesEmpresas(empresa.id); // Chama a função de clique
                }}
                >Ver perfil</a>
              </div>
              <div className="col-md-3"></div>
              <button type="button" className="btnDisconto btn btn-sm ms-md-5 rounded-5"><img src={imgDesconto} style={{ borderRadius: "50%" }} /></button>
            </div>
          ))}

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