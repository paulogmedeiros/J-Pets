import{ useState, useEffect } from 'react';
import imgSenha from '../img/img_senha.svg';
import './Alterar_senha_admin.css';
import logoJPets_adm from '../img/logoJPets.png';
import { notifications } from '@mantine/notifications';

function Alterar_senha_admin() {

  const [senha, setSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroSenha, setErroSenha] = useState(''); // Novo estado para mensagem de erro
  const usuario_id = JSON.parse(localStorage.getItem("decodedToken"))?.usuario_id;

  const errorIcon = <i className="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>;
  const sucessIcon = <i className="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>;

  async function alterarSenhaAdmin(event) {
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

  async function logOff() {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <div className="admPainel">
      <nav className="admNavbar navbar navbar-expand-md">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="/administrador/painel"><img src={logoJPets_adm} alt="" srcSet="" width={50} height={50} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button className="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    P.G.
                  </button>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Meu perfil</a></li>
                    <li><a onClick={logOff} className="dropdown-item" >Sair</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row justify-content-center col-12 ps-4 col-md-5 border shadow-sm mb-5 bg-body-tertiary rounded rounded-4 position-absolute top-50 start-50 translate-middle ">
          <div className="col-md-8 d-flex-md-5 p-5">
            <div className='text-center'>
              <img src={imgSenha} width={60} height={60} />
            </div>
            <p className="AlterarSenhaAdminTitulo fs-1 fw-bold text-center mb-2 mb-md-5 mt-3">Alteração de senha</p>

            <div className="form-floating mt-md-5 mb-3 mt-3">
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password" />
              <label htmlFor="floatingPassword">Senha atual</label>
            </div>

            <div className="form-floating mt-md-3 mb-3">
              <input
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password" />
              <label htmlFor="floatingPassword">Nova senha</label>
            </div>

            <div className="form-floating mt-md-3 mb-4">
              <input
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password" />
              <label htmlFor="floatingPassword">Confirmação da nova senha</label>
              {erroSenha && <div className="text-danger">{erroSenha}</div>}
            </div>

            <button
              onClick={alterarSenhaAdmin}
              className="btnAlterarSenhaAdmin btn w-100"
              role="button">Confirmar</button>

            <p className="text-body-dark text-center mt-3">
              <a href="#" className="cancelarAlterarSenhaAdmin link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Cancelar</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alterar_senha_admin;
