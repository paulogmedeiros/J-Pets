import React from 'react'
import './Novo_servico.css'
import imgCadastroItens from '../img/imgCadastro.svg'
function Novo_servico() {
  return (
    // container geral
    <div className="container">

      {/* container para formulario e imagem */}
      <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

        {/* container para formulario */}
        <div className="col-md-5 d-flex-md-5">

          {/* Título */}
          <p class="tituloNovoServico fs-1 fw-semibold text-center mb-4 mb-md-5">Novo serviço</p>

          {/* lista suspensa para selecionar o animal */}
          <div class="form-floating mb-3 mb-md-3">
            <select class="form-select " id="floatingSelect" aria-label="Floating label select example">

              <option value="1">Animal 1</option>
              <option value="2">Animal 2</option>
              <option value="3">Animal 3</option>
            </select>
            <label for="floatingSelect">Animal</label>
          </div>

          {/* Input para inserir o nome do servico */}
          <div class="form-floating mb-3 mb-md-5">
            <input type="text" class="form-control" id="floatingInput" placeholder="" />
            <label for="floatingInput">Nome do serviço</label>
          </div>


          <a class="btnNovoServico btn w-100" href="#" role="button">Cadastrar serviço</a>

        </div>
        <div className="imgNovoServico col-md-5 d-flex mt-3 mt-md-0 rounded-4">
          <img src={imgCadastroItens} class="img-fluid"></img>
        </div>
      </div>
    </div>
  )
}

export default Novo_servico