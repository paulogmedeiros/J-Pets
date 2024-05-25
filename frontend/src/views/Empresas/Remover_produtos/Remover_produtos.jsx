import React from 'react'
import Produtos_img from './img/Produtos_img.svg'
import './Remover_produtos.css'
function Remover_produtos() {
  return (
    <div className="container">

      {/* container para formulario e imagem */}
      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

        {/* container para formulario */}
        <div className="col-md-5 d-flex-md-5 mt-5 mt-md-0">

          {/* Título */}
          <p class="tituloRemoverProdutosEmpresa fs-md-2 fs-3 fw-semibold text-center mb-4 mb-md-4 mt-md-5">
            Remover produtos
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
            <label for="floatingSelect">Animal</label>
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
            <label for="floatingSelect">Produtos</label>
          </div>

          <a class="btnRemoverProdutosEmpresa btn w-100 mt-md-4" href="#" role="button">
            Remover
          </a>

          <div className='text-center'>
            <a class="btn btn-dark btn-sm w-md-50 mt-md-4 mt-3" href="#" role="button">Remover marca</a>
          </div>

        </div>
        <div className="imgRemoverProdutosEmpresa col-md-5 d-flex mt-3 mt-md-0 rounded-4 p-3">
          <img src={Produtos_img} class="img-fluid"></img>
        </div>
      </div>
    </div>

  )
}

export default Remover_produtos