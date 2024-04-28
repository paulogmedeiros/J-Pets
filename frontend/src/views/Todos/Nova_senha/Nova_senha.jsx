import React from 'react'
// import './Nova_senha.css'
import icone_senha from './img/icone_senha.svg'

function Nova_senha() {  
  return (
    <div className='container'>
       <div className='titulo'>
            <img src={icone_senha} alt="icone de email" height={90} width={90}/>
            <h1><b>Redefinição de senha</b></h1>
            <p>Redefina sua senha.</p>
        </div>
        <div className='formulario'>
            <form action="">
              <div className='input'>
                <input type="password" placeholder='Nova senha' />      
              </div>
              <div className='input'>
                <input type="password" placeholder='Confirmação da nova senha' />
              </div>
                <div className='btn'>
                  <button id='bt1'><b>Confirmar</b></button>
                  <button id='bt2'><b>Voltar à tela de login</b></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Nova_senha