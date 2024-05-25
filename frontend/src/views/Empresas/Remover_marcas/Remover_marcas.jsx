import React from 'react'
import Marcas_img from './img/Marcas_img.svg'
import './Remover_marcas.css'

function Remover_marcas() {
  return (
    <div className="container">

      {/* container para formulario e imagem */}
      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

        {/* container para formulario */}
        <div className="col-md-5 d-flex-md-5 mt-5 mt-md-0">

          {/* Título */}
          <p className= "tituloRemoverMarcaEmpresa fs-md-2 fs-3 fw-semibold text-center mb-4 mb-md-4 mt-md-5">
            Remover marcas
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
            <label for="floatingSelect">Produto</label>
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
            <label for="floatingSelect">Marcas</label>
          </div>

          <a class="btnRemoverMarcaEmpresa btn w-100 mt-md-4" href="#" role="button">
            Remover
          </a>

          <div className='text-center'>
            <a class="btn btn-dark btn-sm w-md-50 mt-md-4 mt-3" href="#" role="button">Remover modelo</a>
          </div>

        </div>
        <div className="imgRemoverMarcaEmpresa col-md-5 d-flex mt-3 mt-md-0 rounded-4 p-3">
          <img src={Marcas_img} class="img-fluid"></img>
        </div>
      </div>
    </div>

  )
}

export default Remover_marcas