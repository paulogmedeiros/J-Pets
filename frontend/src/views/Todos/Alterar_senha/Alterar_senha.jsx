import { useState, useEffect } from 'react'
import './Alterar_senha.css'
import icone_senha from './img/icone_senha.svg'
import { notifications } from '@mantine/notifications';

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

  async function logOff() {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
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
  )
}

export default Alterar_senha