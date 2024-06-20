import { useEffect, useState } from "react";
import "./Novo_servico.css";
import imgCadastroItens from "../img/imgCadastro.svg";
import logoJPets_adm from '../img/logoJPets.png'
import iconeVoltar from '../img/iconeVoltar.svg'
import { notifications } from '@mantine/notifications'

function Novo_servico() {
  const [animais, setAnimal] = useState([])
  const [nome, setNome] = useState('')
  const [animal_id, setAnimalId] = useState('')

  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = "Cadastro | Serviços"
    pegarIdAnimais()
  }, [])

  // função para pegar o ID dos animais e colocar na lista suspensa
  async function pegarIdAnimais() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/animais")

      const dados = await resposta.json()
      console.log(dados) // console log para teste
      setAnimal(dados)

    } catch (error) {
      window.alert("Erro ao carregar animais", error)
    }
  }

  //função para cadastrar serviço (servicos > postServicos)
  async function cadastrarServico(event) {
    event.preventDefault()

    // dados para enviar para o backend
    const servicoDados = {
      animal_id: parseInt(animal_id),
      nome
    }


    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/servicos", { // rota para cadastrar serviços
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(servicoDados)
      });

      const responseData = await resposta.json();

      if (!resposta.ok) {
        notifications.show({ message: responseData.message, color: "white", icon: errorIcon });
        console.error("Erro ao cadastrar serviços:", responseData);
        throw new Error('Erro ao cadastrar serviços: ' + resposta.statusText);

      } else {
        notifications.show({ message: responseData.message, color: "white", icon: sucessIcon });
        console.log("Resposta do servidor:", responseData);
      }
    } catch (error) {
      console.error("Erro ao cadastrar serviço:", error);
    }
  }

  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
  }
  return (

    <div className="admPainel">
      <nav className="admNavbar navbar navbar-expand-md">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="/administrador/painel"><img src={logoJPets_adm} alt="" srcSet="" width={50} height={50} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button className="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ADM
                  </button>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item disabled" href="#">ADM</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/administrador/perfil">Meu perfil</a></li>
                    <li><button className="dropdown-item" onClick={logOff}>Sair</button></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <a href="/administrador/painel/servicos" type="button" class="btnVoltarServico btn m-5 rounded-5">
        <span>
          <img src={iconeVoltar} width={20} height={20} />
        </span>
        Voltar
      </a>
      <div className="container">
        {/* container para formulario e imagem */}

        <div className=" justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

          <div className="row border rounded-4 bg-light shadow-sm mb-5 bg-body-tertiary rounded">
            {/* container para formulario */}
            <div className="col-md-6 d-flex-md-5 mt-5 mt-md-0">
              {/* Título */}
              <p className="tituloNovoServico fs-1 fw-semibold text-center mb-4 mb-md-5 mt-5">
                Novo serviço
              </p>

              {/* lista suspensa para selecionar o animal */}
              <div className="form-floating mb-3 mb-md-3">
                <select
                  value={animal_id}
                  onChange={e => {
                    setAnimalId(e.target.value);
                  }}

                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example">

                  {animais.map(animal => (
                    <option
                      key={animal.id}
                      value={animal.id}>
                      {animal.nome}
                    </option>
                  ))}
                </select>
                <label for="floatingSelect">Animal</label>
              </div>

              {/* Input para inserir o nome do servico */}
              <div className="form-floating mb-3 mb-md-5">
                <input
                  type="text"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                />
                <label for="floatingInput">Nome do serviço</label>
              </div>

              <button
                onClick={cadastrarServico}
                className="btnNovoServico btn w-100">
                Cadastrar serviço
              </button>
            </div>
            <div className="imgNovoServico col-md-6 d-flex mt-3 mt-md-0 rounded-4">
              <img src={imgCadastroItens} className="img-fluid p-3"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Novo_servico;
