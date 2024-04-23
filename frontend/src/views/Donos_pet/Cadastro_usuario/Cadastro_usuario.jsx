import React from 'react'
import './Cadastro_usuario.css'
import cachorro from './img/imagem_cadastro.png'
function Cadastro_usuario() {
  return (
    <div className='container'>
      <div className='imagem'>
        <img src={cachorro} alt="foto fofa de cachorro" height={600} width={600} />
      </div>
      <div className='formulario'>
        <div className='titulo'>
          <h1><b>Boas Vindas!</b></h1>
        </div>
        <form action="" id='form' className='form'>
          <div className='input'>
            <input type="text" name="nome" id="nome" placeholder="Nome e sobrenome" />
            <a>aqui vem a mensagem de erro</a>
          </div>
          {/* <input type="text" name="email" id="" placeholder="Email" />
          <input type="text" name="senha" id="" placeholder="Senha" />
          <input type="text" name="confirmarSenha" id="" placeholder="Confirmar Senha" />
          <button>Criar conta</button> */}
        </form>
        <p>Já possui uma conta?<a href="">Entrar</a></p>
      </div>
    </div>
  )
}

export default Cadastro_usuario