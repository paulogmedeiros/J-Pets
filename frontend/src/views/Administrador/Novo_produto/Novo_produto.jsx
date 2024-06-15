import { useState, useEffect } from 'react'
import './Novo_produto.css'
import imgCadastroItens from '../img/imgCadastro.svg'
import logoJPets_adm from '../img/logoJPets.png'
import { notifications } from '@mantine/notifications'
import { Loader } from '@mantine/core';
import iconeVoltar from '../img/iconeVoltar.svg'
function Novo_produto() {

  const [animais, setAnimal] = useState([])
  const [nome, setNome] = useState('')
  const [animal_id, setAnimal_id] = useState('')
  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>
  useEffect(() => {
    document.title = "Cadastro | Produtos"
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

  // função para cadastrar produtos (produtos > postProdutos)
  async function cadastrarProduto(event) {
    event.preventDefault()

    // dados para enviar para o backend
    const produtoDados = {
      animal_id: parseInt(animal_id),
      nome
    }

    // window alert para teste
    window.alert(produtoDados.animal_id)
    window.alert(produtoDados.nome)

    try {
      // Realiza POST para a API
      const result = await fetch(process.env.REACT_APP_URL_API + '/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(produtoDados)
      })
      const resposta = await result.json()
      console.log(resposta.status, result.status) // console log para teste

      if (result.status >= 400) { // Verifica se o status é 201 Created
        throw new Error(resposta.message)
      }

      notifications.show({ message: resposta.message, color: "white", icon: sucessIcon });
      setTimeout(() => {
      }, 1500);

    } catch (error) {
      console.log(error)
      notifications.show({ message: error.message, color: "white", icon: errorIcon });
    }
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

      <a href="/administrador/painel/produtos" type="button" class="btnVoltarServico btn m-5 rounded-5">
        <span>
          <img src={iconeVoltar} width={20} height={20} />
        </span>
        Voltar
      </a>
      <div className="container">

        {/* container para formulario e imagem */}
        <div className="row justify-content-center col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle border rounded-4 bg-light shadow-sm mb-5 bg-body-tertiary rounded">

          {/* container para formulario */}
          <div className="col-md-6 d-flex-md-5 mt-5 mt-md-0 p-5">

            {/* Título */}
            <p className="tituloNovoProduto fs-1 fw-semibold text-center mb-4 mb-md-5">Novo produto</p>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={animal_id}
                onChange={(e) => { setAnimal_id(e.target.value) }}
                className="form-select "
                id="floatingSelect"
                aria-label="Floating label select example">

                <option value="">Selecione</option>
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

            {/* Input para inserir o nome do produto */}
            <div className="form-floating mb-3 mb-md-5">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="" />
              <label for="floatingInput">Nome do produto</label>
            </div>

            <button
              onClick={cadastrarProduto}
              className="btnNovoProduto btn w-100"
              role="button">Cadastrar produto</button>

          </div>
          <div className="imgNovoProduto col-md-6 d-flex mt-3 mt-md-0 rounded-4">
            <img src={imgCadastroItens} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Novo_produto