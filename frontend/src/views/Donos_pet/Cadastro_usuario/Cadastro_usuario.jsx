import {useEffect, useState} from 'react'
import './Cadastro_usuario.css'
import cachorro from './img/imagem_cachorro.svg'
import iconeUsuario from './img/icone_usuario.svg'
import iconeEmail from './img/icone_email.svg'
import iconeSenha from './img/icone_senha_login.svg'


function Cadastro_usuario() {


  return (
    <div className="container">

      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle">

      <div className="img_cadastro_usuario col-md-5 d-flex mt-3 mt-md-0 rounded-4">
          <img src={cachorro} class="img-fluid"></img>
        </div>

        <div className=" col-md-5 d-flex-md-5">
          <p class="titulo_cadastro_usuario fs-1 fw-bold text-center mb-0 mb-md-1">Boas-vindas!</p>

          <div class="form-floating mb-1 mb-md-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Nome e sobrenome</label>
          </div>

          <div class="form-floating mb-1 mb-md-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Password" />
            <label for="floatingInput">Email</label>
          </div>

          <div class="form-floating mb-1 mb-md-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Senha</label>
          </div>

          <div class="form-floating mb-1 mb-md-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Confirmar senha</label>
          </div>

          <a class="btn_cadastro_usuario btn w-100" href="#" role="button">Criar conta</a>

          <p class=" text-body-dark text-center mt-4">
            Já possui uma conta? <a href="#" class="redirecionamento_cadastro_usuario link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Entrar</a>
          </p>
        </div>

      </div>

    </div>

  )
}

export default Cadastro_usuario