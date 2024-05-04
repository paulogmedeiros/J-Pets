import {useState} from 'react'
// import './Cadastro_empresa.css'
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
          const resposta = await fetch('/empresas', {
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
          else{
              alert('Usuário cadastrado')
              console.debug("Usuário inserido!")
              window.location.href = '/'
          }
      } catch (error) {
          console.debug(error)
      }
  }
  return (
    <div className='cadastroEmpresa'>
      <div className='cadastroEmpresaConteudo'>
        <div className='cadastroEmpresaFormulario'>
          <h1>Criar nova conta</h1>
          <form onSubmit={cadastrarEmpresa}>
            <input type="text" value={nome_fantasia} placeholder="Nome fantasia" onChange={ e => setNome_fantasia(e.target.value)}/>
            <input type="text" value={cnpj} placeholder="CNPJ" onChange={ e => setCNPJ(e.target.value)}/>
            <input type="text" value={email} placeholder="Email profissional" onChange={ e => setEmail(e.target.value)}/>
            <input type="password" value={senha} placeholder="Senha" onChange={ e => setSenha(e.target.value)}/>
            <input type="password" value={senha} placeholder="Confirmar senha" />
            <button type='submit'>Criar uma conta profissional</button>
          </form>
          <p>Já possui uma conta?<a href="">Entrar</a></p>
        </div>
        <div className='cadastroEmpresaImagem'>
          <img src={imagemCadastroEmpresa} alt="" height={516} width={516} />
        </div>
      </div>
    </div>

  )
}

export default Cadastro_empresa