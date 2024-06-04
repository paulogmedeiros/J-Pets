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
      const resposta = await fetch(process.env.REACT_APP_URL_API +"/servicos", {
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

    <div className="admPainel">
      <nav className="admNavbar navbar navbar-expand-md">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#"><img src={logoJPets_adm} alt="" srcSet="" width={50} height={50} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button className="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    P.G.
                  </button>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Meu perfil</a></li>
                    <li><a className="dropdown-item" href="#">Sair</a></li>
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
            <p className="tituloNovoServico fs-1 fw-semibold text-center mb-4 mb-md-5">
              Novo serviço
            </p>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                className="form-select "
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
            <div className="form-floating mb-3 mb-md-5">
              <input
                type="text"
                value={nomeServico}
                onChange={(e) => setNomeServico(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder=""
              />
              <label for="floatingInput">Nome do serviço</label>
            </div>

            <a onClick={() => AdicionarServico()} className="btnNovoServico btn w-100" href="#" role="button">
              Cadastrar serviço
            </a>
          </div>
          <div className="imgNovoServico col-md-5 d-flex mt-3 mt-md-0 rounded-4">
            <img src={imgCadastroItens} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Novo_servico;
