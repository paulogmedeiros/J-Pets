import React from 'react'
import './Esqueceu_a_senha.css'
import icone_email from './img/icone_email.svg'

function Esqueceu_a_senha() {
    return (
        <div className="container">

            <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

                <div className="col-md-5 d-flex-md-5">

                    <div className="text-center">
                        <img src={icone_email} class="img-fluid" width={90} height={90}></img>
                    </div>

                    <p class="EsqueceuASenhaTitulo fs-1 fw-bold text-center mb-2 mb-md-2">Esqueceu a sua senha?</p>

                    <p className='text-center'>Nós enviaremos um email para que você possa redefinir a sua senha.</p>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control rounded-5 w-md-75" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>

                    <a class="btnEsqueceuASenha btn w-100 rounded-5" href="#" role="button">Enviar</a>

                    <p class="text-body-dark text-center mt-4 ">
                        <a href="#" class="cancelarEsqueceuASenha link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Cancelar</a>
                    </p>
                </div>

            </div>

        </div>

    )
}

export default Esqueceu_a_senha