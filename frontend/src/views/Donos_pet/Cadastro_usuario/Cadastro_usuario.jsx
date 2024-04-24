import React from 'react'
import './Cadastro_usuario.css'
import cachorro from './img/imagem_cachorro.svg'
import iconeUsuario from './img/icone_usuario.svg'
import iconeEmail from './img/icone_email.svg'
import iconeSenha from './img/icone_senha_login.svg'
function Cadastro_usuario() {
  return (
    <div className='container'>
      <div className='container_imagem'>
        <img src={cachorro} alt="foto fofa de cachorro" height={597} width={597} />
      </div>
      <div className='conteiner_formulario'>
        <div className='titulo'>
          <h1><b>Boas-Vindas!</b></h1>
        </div>
        <form action="" id='form' className='form'>
          <div className='input-wrapper'>
             <img src={iconeUsuario} alt="icone de usuario" height={48} width={48}/>
             <input type="text" name="nome" id="nome" placeholder="Nome e sobrenome" />
          </div>
          <div className='input-wrapper'>
             <img src={iconeEmail} alt="icone de email"  height={48} width={48}/>
             <input type="text" name="email" id="" placeholder="Email" />
          </div>
          <div className='input-wrapper'>
             <img src={iconeSenha} alt="icone de senha" height={48} width={48}/>
             <input type="password" name="senha" id="" placeholder="Senha" />
          </div>
          <div className='input-wrapper'>
             <img src={iconeSenha} alt="icone de senha" height={48} width={48} />
             <input type="password" name="confirmarSenha" id="" placeholder="Confirmar Senha" />
          </div>
          <button>Criar conta</button>
        </form>
        <p>Já possui uma conta?<a href="">Entrar</a></p>
      </div>
    </div>
  )
}

export default Cadastro_usuario