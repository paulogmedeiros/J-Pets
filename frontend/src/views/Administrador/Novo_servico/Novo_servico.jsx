import { useState } from "react";
import "./Novo_servico.css";
import imgCadastroItens from "../img/imgCadastro.svg";
import logoJPets_adm from '../img/logoJPets.png'

function Novo_servico() {
  const [animal, setAnimal] = useState("");
  const [nomeServico, setNomeServico] = useState("");

  // Função que será chamada ao enviar o formulário
  async function AdicionarServico(event) {
    // impede o comportamento padrão de reload da página


    // Criando objeto com os dados do usuário que serão enviados para a API
    const servicoDados = {
      animal,
      nomeServico
    };

    try {
      // Realiza POST para a API
      const resposta = await fetch("/servicos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Especificando o corpo como JSON
        },
        body: JSON.stringify(servicoDados),
      });

      // Verifica se a resposta da API foi bem-sucedida
      if (!resposta.ok) {
        console.debug("Erro ao inserir novo serviço");
      } else {
        alert("Serviço cadastrado!");
        console.debug("Serviço inserido!");
        window.location.href = "/administrador/painel";
      }
    } catch (error) {
      console.debug(error);
    }
  }

  return (

    <div class="admPainel">
      <nav class="admNavbar navbar navbar-expand-md">
        <div class="container-fluid d-flex">
          <a class="navbar-brand" href="#"><img src={logoJPets_adm} alt="" srcset="" width={50} height={50} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <div class="dropdown">
                  <button class="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    P.G.
                  </button>
                  <ul class="dropdown-menu ">
                    <li><a class="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Meu perfil</a></li>
                    <li><a class="dropdown-item" href="#">Sair</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* container para formulario e imagem */}
        <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">
          {/* container para formulario */}
          <div className="col-md-5 d-flex-md-5 mt-5 mt-md-0">
            {/* Título */}
            <p class="tituloNovoServico fs-1 fw-semibold text-center mb-4 mb-md-5">
              Novo serviço
            </p>

            {/* lista suspensa para selecionar o animal */}
            <div class="form-floating mb-3 mb-md-3">
              <select
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                class="form-select "
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Pássaro">Pássaro</option>
                <option value="Peixe">Peixe</option>
              </select>
              <label for="floatingSelect">Animal</label>
            </div>

            {/* Input para inserir o nome do servico */}
            <div class="form-floating mb-3 mb-md-5">
              <input
                type="text"
                value={nomeServico}
                onChange={(e) => setNomeServico(e.target.value)}
                class="form-control"
                id="floatingInput"
                placeholder=""
              />
              <label for="floatingInput">Nome do serviço</label>
            </div>

            <a onClick={() => AdicionarServico()} class="btnNovoServico btn w-100" href="#" role="button">
              Cadastrar serviço
            </a>
          </div>
          <div className="imgNovoServico col-md-5 d-flex mt-3 mt-md-0 rounded-4">
            <img src={imgCadastroItens} class="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Novo_servico;
