import React from 'react'
import './Login.css'
import imagem_login from '../../img/imagem_login.png'
function Login() {
    return (

        // Container principal
        <div className="container">

            {/* Formulário */}

            <div className="formulario">
                <h1>Login</h1>
                <div className="email">
                    <input class="input-email" type="email" name="email" id="" placeholder='Email' />
                </div>
                <div className='senha'>
                    <input class="input-senha" type="password" name="senha" id="" placeholder='Senha' />
                </div>
                <a href="">Esqueceu a senha?</a>
                <button className='btn-acessar'>Acessar</button>
            </div>

            {/* Imagem */}
            <div className="img-login">
                <img src={imagem_login} alt="imagem da tela de login" className='login_img' width={600} height={600} />
            </div>
        </div>
    )
}

export default Login