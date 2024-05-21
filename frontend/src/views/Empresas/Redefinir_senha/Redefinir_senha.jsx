import React from 'react'
import './Redefinir_senha_empresa.css'
import icone_senha from './img/icone_senha.svg'

function Redefinir_senha_empresa() {
  return (
    <div className="container">

      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle">

        <div className="col-md-5 d-flex-md-5">

          <div className='text-center'>
            <img src={icone_senha} width={90} height={90} />
          </div>

          <p class="AlterarSenhaEmpresasTitulo fs-1 fw-bold text-center mb-2 mb-md-2 mt-3">Redefinição de senha</p>
          <p className='text-center'>Redefina sua senha.</p>

          <div class="form-floating mt-md-3 mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Nova senha</label>
          </div>

          <div class="form-floating mt-md-3 mb-4">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Confirmação da nova senha</label>
          </div>

          <a class="btnAlterarSenhaEmpresas btn w-100" href="#" role="button">Confirmar</a>

          <p class="text-body-dark text-center mt-3">
            <a href="#" class="cancelarAlterarSenhaEmpresas link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Voltar à tela de login</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Redefinir_senha_empresa