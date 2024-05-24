import React from 'react'
import './Remover_servicos.css'
import Servicos_img from './img/Servicos_img.svg'

function Remover_servicos() {
  return (
    <div className="container">

      {/* container para formulario e imagem */}
      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

        {/* container para formulario */}
        <div className="col-md-5 d-flex-md-5 mt-5 mt-md-0">

          {/* Título */}
          <p class="tituloRemoverServicoEmpresa fs-2 fw-semibold text-center mb-4 mb-md-5">
            Remover serviços
          </p>

          {/* lista suspensa para selecionar o animal */}
          <div class="form-floating mb-3 mb-md-3">
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
            <label for="floatingSelect">Animal</label>
          </div>

          {/* lista suspensa para escolher o serviço */}
          <div class="form-floating mb-3 mb-md-3">
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
            <label for="floatingSelect">Serviços</label>
          </div>

          <a class="btnRemoverServicoEmpresa btn w-100" href="#" role="button">
            Remover
          </a>
        </div>
        <div className="imgRemoverServicosEmpresa col-md-5 d-flex mt-3 mt-md-0 rounded-4">
          <img src={Servicos_img} class="img-fluid"></img>
        </div>
      </div>
    </div>

  )
}

export default Remover_servicos