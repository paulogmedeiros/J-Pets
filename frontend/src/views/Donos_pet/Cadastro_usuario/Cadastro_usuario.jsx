import { useEffect, useState } from 'react'
import './Cadastro_usuario.css'
import cachorro from './img/imagem_cachorro.svg'
import iconeUsuario from './img/icone_usuario.svg'
import iconeEmail from './img/icone_email.svg'
import iconeSenha from './img/icone_senha_login.svg'
import { notifications } from '@mantine/notifications';
import { Loader } from '@mantine/core';

function Cadastro_usuario() {
  useEffect(() => {
    document.title = "Cadastro | Dono de Pet"
  })

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erroSenha, setErroSenha] = useState(''); // Novo estado para mensagem de erro

  const [carregando, setCarregando] = useState(false)
  const errorIcon = <i className="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>;
  const sucessIcon = <i className="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>;

  // função assíncrona para ser chamadd no clique do botão de criar conta
  async function cadastrarUsuario(event) {
    setCarregando(true)
    event.preventDefault()

    // tratamento pra ver se as senhas são iguais
    if (senha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem")
      return; // Adiciona este retorno para sair da função se as senhas não coincidirem
    }

    setErroSenha(''); // Limpa a mensagem de erro se as senhas coincidirem

    const usuarioDados = {
      nome,
      email,
      senha
    }

    try {

      const result = await fetch(`${process.env.REACT_APP_URL_API}/donoPet`, { // rota da API para cadastrar donos de pet
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // especificando o corpo como json
        },
        body: JSON.stringify(usuarioDados)
      })
      const resposta = await result.json()
      console.log(resposta.status, result.status)

      if (result.status >= 400) { // Verifica se o status é 201 Created
        throw new Error(resposta.message)
      }

      notifications.show({ message: resposta.message, color: "white", icon: sucessIcon });
      setTimeout(() => {
        setCarregando(false)
        window.location.href = '/';
      }, 1500);

    } catch (error) {
      setCarregando(false)
      console.log(error)
      notifications.show({ message: error.message, color: "white", icon: errorIcon });
    }

  }

  return (
    <div className="container">

      <div className="row justify-content-center col-12 border rounded-4 shadow-sm mb-5 bg-body-tertiary rounded col-md-8 position-absolute top-50 start-50 translate-middle">

        <div className="img_cadastro_usuario col-md-6 d-flex mt-3 mt-md-0 rounded-4">
          <img src={cachorro} className="img-fluid"></img>
        </div>

        <div className=" col-md-6 d-flex-md-5 p-5">
          <p className="titulo_cadastro_usuario fs-1 fw-bold text-center mb-0 mb-md-1">Boas-vindas!</p>

          <div className="form-floating mb-1 mb-md-3">
            <input type="email"
              value={nome}
              onChange={e => setNome(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com" />
            <label for="floatingInput">Nome e sobrenome</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="Password" />
            <label for="floatingInput">Email</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className="form-control"
              id="floatingPassword"
              placeholder="Password" />
            <label for="floatingPassword">Senha</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="password"
              value={confirmarSenha}
              onChange={e => setConfirmarSenha(e.target.value)}
              className="form-control"
              id="floatingPassword"
              placeholder="Password" />
            <label for="floatingPassword">Confirmar senha</label>
            {erroSenha && <div className="text-danger">{erroSenha}</div>}
          </div>

          <button
            type="button"
            onClick={cadastrarUsuario}
            className="btn_cadastro_usuario btn w-100">
            {carregando ? <Loader color="white" /> : "Criar conta"}</button>

          <p className=" text-body-dark text-center mt-4">
            Já possui uma conta? <a href="/" className="redirecionamento_cadastro_usuario link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Entrar</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cadastro_usuario