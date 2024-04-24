import React from 'react'
import './Esqueceu_a_senha.css'
import icone_email from './img/icone_email.svg'

function Esqueceu_a_senha() {
  return (
    <div className='container'>
        <div className='titulo'>
            <img src={icone_email} alt="icone de email" height={96} width={96}/>
            <h1><b>Esqueceu a sua senha?</b></h1>
            <p>Nós enviaremos um email para que você possa redefinir a sua senha.</p>
        </div>
        <div className='formulario'>
            <form action="">
                <input type="text" placeholder='Email' />
                <div className='buttons'>
                    <button>Enviar</button>
                    <button>Cancelar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Esqueceu_a_senha