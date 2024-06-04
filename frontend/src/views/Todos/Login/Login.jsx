import { useEffect, useState } from 'react'
import './Login.css'
import imagem_login from '../../../img/imagem_login.png'
function Login() {

    useEffect(() => {
        document.title = "Login"
    })

    return (

        <div className="loginContainer container">

            <div className="row justify-content-center border border-2 rounded-4 col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

                <div className="col-md-6 d-flex-md-5 ">

                    <p className="login_titulo fs-1 fw-bold text-center mt-3 mb-2 mb-md-5">Login</p>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>

                    <div className="form-floating mt-md-5">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Senha</label>
                    </div>

                    <a className="esqueceu_a_senha_login mt-3 mb-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover d-flex" href="#">
                        Esqueceu a senha?
                    </a>

                    <a className="btn_login btn w-100 " href="#" role="button">Acessar</a>

                    <p className="text-body-dark text-center mt-4">
                        Não possui uma conta? <a href="#" className="esqueceu_a_senha_login link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Registre-se</a>
                    </p>
                </div>

                <div className="img_login col-md-6 d-flex mt-3 mt-md-0 rounded-4">
                    <img src={imagem_login} className="img-fluid"></img>
                </div>
            </div>
        </div>
    )
}

export default Login