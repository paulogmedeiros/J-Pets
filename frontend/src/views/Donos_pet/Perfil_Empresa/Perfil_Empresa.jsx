import { useState, useEffect } from 'react'
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'
import iconeUsuarioLogin from './img/icone_usuarioLogin.svg'
import imgEstrela from './img/imgEstrela.svg'
import mapaImg from './img/mapaImg.png'
import iconeVoltar from './img/iconeVoltar.svg'
import axios from 'axios'

function Perfil_Empresa() {
  const id = JSON.parse(localStorage.getItem("sesaoBuscaIdEmpresa"))?.id;
  const [servicos, setServicos] = useState([]);
  const [empresa, setEmpresa] = useState({})
  useEffect(() => {
    document.title = "Página inicial";
    buscarServicos(); // Chamada inicial para buscar os serviços
    buscaEmpresa()
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

  async function buscaEmpresa() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + '/empresas/'+ id)
      const dados = await resposta.json()
      console.log(dados)
      setEmpresa(dados)
      
    } catch (error) {

    }
  }

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
                <img src={iconeCoracao} width={40} height={40} alt="Ícone Coração" />
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

      {/* conteúdo principal */}
      <div>
        <button type="button" class="voltarBotao btn m-5 rounded-5"><span><img src={iconeVoltar} width={20} height={20} /></span> Voltar</button>

        <div className="containerGeralAvaliacoes">
          <div className="containerPerfilAvaliacoes row justify-content-center border row-cols-md-2 row-cols-1">
            <div className="col-md-5 d-md-flex text-center p-md-5 p-3 ps-md-5"><img src={process.env.REACT_APP_URL_API_IMG+empresa.foto_perfil} width={100} height={100} style={{ borderRadius: "50%" }} className='me-md-3 m-3' />
              <div className='mt-4 text-start' >
                <h2 >{empresa.nome_fantasia}</h2>
                <p className='mt-4'>Aberto: {empresa.dia_semana_inicio}</p>
                <p>Fechado: {empresa.dia_semana_fim}</p>
                <p>Horário de funcionamento: {empresa.hora_abertura} às {empresa.hora_fechamento}</p>
                <p>Cidade: {empresa.cidade}</p>
                <p>Bairro: {empresa.bairro}</p>
                <p>Rua: {empresa.rua}     número: {empresa.numero_residencia}</p>
              </div>
            </div>

            <div className="col-md-3 p-3 text-center ">
              <div className="card text-center">

                <div className="card-body">
                  <h5 className="card-title ">
                    <div className="d-flex justify-content-center">
                      <img src={mapaImg} alt="" srcset="" className='img-fluid rounded-3' />
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <h4 className='container pt-5 text-md-start text-center'>Comentários</h4>
          <div className="containerPerfilAvaliacoes container col-md-6 border rounded-4 p-md-5 p-3 mt-md-5 mt-3 ">
            <div className='container'>
              <div className="card">
                <div className="card-header">
                  Usuário
                </div>
                <div className="">
                  <div className="card-body">
                    <p className="card-text">comentário</p>
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea">Inserir comentário</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Perfil_Empresa