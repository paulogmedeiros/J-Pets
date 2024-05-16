import React from 'react'
import './Nova_marca.css'
import imgCadastroItens from '../img/imgCadastro.svg'
function Nova_marca() {
  return (

    // container geral
    <div className="container">

      {/* container para formulario e imagem */}
      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

        {/* container para formulario */}
        <div className="col-md-5 d-flex-md-5">

          {/* Título */}
          <p class="tituloNovaMarca fs-1 fw-semibold text-center mb-4 mb-md-4">Nova marca</p>

          {/* lista suspensa para selecionar o animal */}
          <div class="form-floating mb-3 mb-md-3">
            <select class="form-select " id="floatingSelect" aria-label="Floating label select example">

              <option value="1">Animal 1</option>
              <option value="2">Animal 2</option>
              <option value="3">Animal 3</option>
            </select>
            <label for="floatingSelect">Animal</label>
          </div>

          {/* lista suspensa para selecionar o produto */}
          <div class="form-floating mb-3 mb-md-3">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option value="1">Produto 1</option>
              <option value="2">Produto 2</option>
              <option value="3">Produto 3</option>
            </select>
            <label for="floatingSelect">Produto</label>
          </div>

          {/* Input para inserir o nome da marca */}
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder=""/>
              <label for="floatingInput">Nome da marca</label>
          </div>


          <a class="btnNovaMarca btn w-100" href="#" role="button">Cadastrar marca</a>

        </div>

        <div className="imgNovaMarca col-md-5 d-flex mt-3 mt-md-0 rounded-4">
          <img src={imgCadastroItens} class="img-fluid"></img>
        </div>


      </div>

    </div>

  )
}

export default Nova_marca