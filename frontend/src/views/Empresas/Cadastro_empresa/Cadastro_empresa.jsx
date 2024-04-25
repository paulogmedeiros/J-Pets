import React from 'react'
// import './Cadastro_empresa.css'
import imagemCadastroEmpresa from './img/imagem_cadastro_empresa.svg'
function Cadastro_empresa() {
  return (

   <div className='cadastroEmpresa'>
    <div className='cadastroEmpresaConteudo'>
      <div className='cadastroEmpresaFormulario'>
        <h1>Criar nova conta</h1>
        <form>
          <input type="text" placeholder="Nome fantasia"/>
          <input type="text" placeholder="CNPJ"/>
          <input type="text" placeholder="Email profissional"/>
          <input type="password" placeholder="Senha"/>
          <input type="password" placeholder="Confirmar senha"/>
          <button>Criar uma conta profissional</button>
        </form>
        <p>Já possui uma conta?<a href="">Entrar</a></p>
      </div>
      <div className='cadastroEmpresaImagem'>
        <img src={imagemCadastroEmpresa} alt="" height={516} width={516}/>
      </div>
    </div>
   </div> 

  )
}

export default Cadastro_empresa