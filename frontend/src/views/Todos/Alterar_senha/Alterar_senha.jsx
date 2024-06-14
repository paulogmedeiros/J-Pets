import React from 'react'
import './Alterar_senha.css'
import icone_senha from './img/icone_senha.svg'

function Alterar_senha() {
  return (
    <div className="container">

      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

        <div className="col-md-5 d-flex-md-5">

          <div className='text-center'>
            <img src={icone_senha} width={48} height={48} />
          </div>

          <p className="titulo_alterar_senha fs-1 fw-bold text-center mb-2 mb-md-2">Alteração de senha</p>
          <p className='text-center'>Altere sua senha.</p>


          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Senha atual</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Nova senha</label>
          </div>

          <div className="form-floating mt-md-3 mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Confirmação da nova senha</label>
          </div>

          <a className="btn_alterar_senha btn w-100 " href="#" role="button">Confirmar</a>

          <p className="text-body-dark text-center mt-4">
            <a href="#" className="esqueceu_a_senha_login link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Cancelar</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Alterar_senha