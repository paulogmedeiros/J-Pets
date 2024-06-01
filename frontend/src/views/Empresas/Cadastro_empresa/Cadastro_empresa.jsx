import { useState } from 'react'
import './Cadastro_empresa.css'
import imagemCadastroEmpresa from './img/imagem_cadastro_empresa.svg'

function Cadastro_empresa() {
  // Definindo os estados para cada campo do formulário
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cnpj, setCNPJ] = useState('')
  const [nome_fantasia, setNome_fantasia] = useState('')

  // Função que será chamada ao enviar o formulário
  async function cadastrarEmpresa(event) {

    // impede o comportamento padrão de reload da página
    event.preventDefault()

    // Criando objeto com os dados do usuário que serão enviados para a API
    const empresasDados = {
      email,
      senha,
      cnpj,
      nome_fantasia
    }

    try {
      // Realiza POST para a API
      const resposta = await fetch(process.env.REACT_APP_URL_API +'/empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(empresasDados)
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (!resposta.ok) {
        console.debug("Erro ao criar usuário")
      }
      else {
        alert('Usuário cadastrado')
        console.debug("Usuário inserido!")
        window.location.href = '/'
      }
    } catch (error) {
      console.debug(error)
    }
  }
  return (
    <div className="container">

      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle">

        <div className=" col-md-5 d-flex-md-5">
          <p className="titulo_cadastro_empresa fs-1 fw-bold text-center mb-0 mb-md-1">Criar nova conta</p>

          <div className="form-floating mb-1 mb-md-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Nome fantasia</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Password" />
            <label for="floatingInput">CNPJ</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Password" />
            <label for="floatingInput">Email profissional</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Senha</label>
          </div>

          <div className="form-floating mb-1 mb-md-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Confirmar senha</label>
          </div>

          <a className="btn_cadastro_empresa btn w-100" href="#" role="button">Criar conta profissional</a>

          <p className=" text-body-dark text-center mt-4">
            Já possui uma conta? <a href="#" className="redirecionamento_cadastro_empresa link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Entrar</a>
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