import { useState, useEffect } from 'react'
import './Cadastro_empresa.css'
import imagemCadastroEmpresa from './img/imagem_cadastro_empresa.svg'

function Cadastro_empresa() {

  useEffect(() => {
    document.title = "Cadastro | Empresa"
  }, [])

  // Definindo os estados para cada campo do formulário
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [cnpj, setCNPJ] = useState('')
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [erroSenha, setErroSenha] = useState(''); // Novo estado para mensagem de erro

  // Função que será chamada ao enviar o formulário
  async function cadastrarEmpresa(event) {

    // impede o comportamento padrão de reload da página
    event.preventDefault()

    // tratamento pra ver se as senhas são iguais
    if (senha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem")
      return; // Adiciona este retorno para sair da função se as senhas não coincidirem
    }
    // Criando objeto com os dados do usuário que serão enviados para a API
    const empresasDados = {
      email,
      senha,
      cnpj,
      nomeFantasia
    }

    try {
      // Realiza POST para a API
      const resposta = await fetch(process.env.REACT_APP_URL_API + '/empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(empresasDados)
      })

      if (resposta.status === 201) { // Verifica se o status é 201 Created
        console.log("Usuário cadastrado com sucesso!");
        window.alert('Usuário cadastrado com sucesso!');
        window.location.href = '/'; // Redireciona para a página de
      } else if (!resposta.ok) {
        console.error("Erro ao criar usuário:", resposta.statusText);
        window.alert('Erro ao criar usuário: ' + resposta.statusText);
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }

  }
  return (
    <div className="container">

      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle">

        <div className=" col-md-5 d-flex-md-5">
          <p className="titulo_cadastro_empresa fs-1 fw-bold text-center mb-0 mb-md-1">Criar nova conta</p>

          <div className="form-floating mb-1 mb-md-3">
            <input type="text"
              value={nomeFantasia}
              onChange={e => setNomeFantasia(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com" />
            <label for="floatingInput">Nome fantasia</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="number"
              value={cnpj}
              onChange={e => setCNPJ(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="Password" />
            <label for="floatingInput">CNPJ</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="Password" />
            <label for="floatingInput">Email profissional</label>
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
            onClick={cadastrarEmpresa}
            className="btn_cadastro_empresa btn w-100">Criar conta profissional</button>

          <p className=" text-body-dark text-center mt-4">
            Já possui uma conta? <a href="/" className="redirecionamento_cadastro_empresa link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Entrar</a>
          </p>
        </div>
        <div className="img_login col-md-5 d-flex mt-3 mt-md-0 rounded-4">
          <img src={imagemCadastroEmpresa} className="img-fluid"></img>
        </div>
      </div>
    </div>
  )
}

export default Cadastro_empresa