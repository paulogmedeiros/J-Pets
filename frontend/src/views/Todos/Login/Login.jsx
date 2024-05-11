import { useEffect, useState } from 'react'
import './Login.css'
import imagem_login from '../../../img/imagem_login.png'
function Login() {

    useEffect(() => {
        document.title = "Login"
    })

    return (

        <div className="container">

                <div className="row col-12 ps-4 col-md-10 position-absolute top-50 start-50 translate-middle">

                    <div className="col-md-5 d-flex-md-5">
                    <p class="m-4 ps-5 fs-1 fw-bold">Login</p>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Senha</label>

                        </div>
                        <a class="mt-3 mb-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover d-flex" href="#">
                            Esqueceu a senha?
                        </a>

                        <a class="btn btn-primary w-100" href="#" role="button">Acessar</a>
                    </div>

                    <div className="img_login col-md-5 d-flex mt-3 mt-md-0 rounded-4">
                        <img src={imagem_login} class="img-fluid"></img>
                    </div>
                </div>

        </div>

    )
}

export default Login