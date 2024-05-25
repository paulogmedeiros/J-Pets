import React from 'react'
import Modelos_img from './img/Modelos_img.svg'
import './Adicionar_modelos.css'
function Adicionar_modelos() {
  return (
    <div className="container">

      {/* container para formulario e imagem */}
      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

        {/* container para formulario */}
        <div className="col-md-5 d-flex-md-5 mt-5 mt-md-0">

          {/* Título */}
          <p class="tituloAdicionarModeloEmpresa fs-md-2 fs-3 fw-semibold text-center mb-4 mb-md-4 mt-md-0">
            Adicionar modelos
          </p>

          {/* lista suspensa para selecionar o animal */}
          <div class="form-floating mb-3 mb-md-4">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example">
              <option value="">Selecione</option>
              <option value="Cachorro">teste</option>
              <option value="Gato">teste</option>
              <option value="Pássaro">teste</option>
              <option value="Peixe">teste</option>
            </select>
            <label for="floatingSelect">Marca</label>
          </div>

          {/* lista suspensa para escolher o produto */}
          <div class="form-floating mb-3 mb-md-4">
            <select
              class="form-select "
              id="floatingSelect"
              aria-label="Floating label select example">
              <option value="">Selecione</option>
              <option value="Cachorro">teste</option>
              <option value="Gato">teste</option>
              <option value="Pássaro">teste</option>
              <option value="Peixe">teste</option>
            </select>
            <label for="floatingSelect">Modelos</label>
          </div>

          <a class="btnAdicionarModeloEmpresa btn w-100 mt-md-4" href="#" role="button">
            Adicionar
          </a>
        </div>
        <div className="imgAdicionarModeloEmpresa col-md-5 d-flex mt-3 mt-md-0 rounded-4 p-3">
          <img src={Modelos_img} class="img-fluid"></img>
        </div>
      </div>
    </div>

  )
}

export default Adicionar_modelos