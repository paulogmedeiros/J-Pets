import {useState} from 'react'
import './Cadastro_admin.css'


function Cadastro_admin() {
  return (
    <div className="container">

      <div className="row justify-content-center col-12 ps-4 col-md-10 position-absolute top-50 start-50 translate-middle ">

        <div className="col-md-5 d-flex-md-5">
          <p class="tituloCadastroAdmin fs-1 fw-bold text-center mb-2 mb-md-4">Cadastro administrador</p>

          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-5" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email</label>
          </div>

          <div class="form-floating mt-md-3 mb-3">
            <input type="password" class="form-control rounded-5" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Senha</label>
          </div>

          <div class="form-floating mt-md-3 mb-3">
            <input type="password" class="form-control rounded-5" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Confirmar senha</label>
          </div>

          <div className='text-center'>
            <a class="btnCadastroAdmin btn w-75 rounded-4" href="#" role="button">Cadastrar</a>
          </div>


          <p class="text-body-secondary text-center mt-3">
            <a href="/administrador/painel/" class="cancelarAdminCadastro link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Cancelar</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cadastro_admin