import { useState, useEffect } from 'react'
import './Alterar_senha.css'
import icone_senha from './img/icone_senha.svg'
import { notifications } from '@mantine/notifications';
import axios from 'axios';
import logoJPets from './img/logoJPets.png'
import iconeCoracao from './img/icone_coracao.svg'

function Alterar_senha() {

  const [senha, setSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroSenha, setErroSenha] = useState(''); // Novo estado para mensagem de erro
  const usuario_id = JSON.parse(localStorage.getItem("decodedToken"))?.usuario_id;

  const errorIcon = <i className="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>;
  const sucessIcon = <i className="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>;

  async function alterarSenhaDNP(event) {
    event.preventDefault();

    if (novaSenha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem");
      return;
    }

    const alterarSenhaDados = {
      senha,
      novaSenha
    };

    try {
      console.log("Enviando dados para o servidor:", alterarSenhaDados);

      const response = await fetch(`${process.env.REACT_APP_URL_API}/senha/${usuario_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(alterarSenhaDados)
      });

      const resposta = await response.json();
      console.log("Resposta do servidor:", resposta);

      if (response.status >= 400) {
        throw new Error(resposta.message);
      }

      // Notifica o usuário sobre o sucesso
      notifications.show({ message: resposta.message, color: "white", icon: sucessIcon });

      // Limpa os campos de senha
      setSenha('');
      setNovaSenha('');
      setConfirmarSenha('');

      // Faz logout e redireciona o usuário
      setTimeout(() => {
        logOff();
      }, 1500);

    } catch (error) {
      console.log("Erro ao alterar a senha:", error);
      notifications.show({ message: error.message, color: "white", icon: errorIcon });
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

  async function logOff() {
    localStorage.clear();
    window.location.href = '/';
  }
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

    <div className="container">

      <div className="row justify-content-center col-12 ps-4 col-md-5 border shadow-sm mb-5 bg-body-tertiary rounded rounded-4 position-absolute top-50 start-50 translate-middle ">

        <div className="col-md-8 d-flex-md-5 p-3">

          <div className='text-center'>
            <img src={icone_senha} width={48} height={48} />
          </div>

          <p className="titulo_alterar_senha fs-1 fw-bold text-center mb-2 mb-md-2">Alteração de senha</p>
          <p className='text-center'>Altere sua senha.</p>

          <div className="form-floating mb-3">
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password" />
            <label for="floatingPassword">Senha atual</label>
          </div>

          <div className="form-floating mb-3">
            <input
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password" />
            <label for="floatingPassword">Nova senha</label>
          </div>

          <div className="form-floating mt-md-3 mb-3">
            <input
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password" />
            <label for="floatingPassword">Confirmação da nova senha</label>
          </div>

          <button
            onClick={alterarSenhaDNP}
            className="btn_alterar_senha btn w-100 "
            role="button">Confirmar</button>

          <p className="text-body-dark text-center mt-4">
            <a href="/usuario/perfil" className="esqueceu_a_senha_login link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Cancelar</a>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Alterar_senha