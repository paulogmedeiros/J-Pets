import { useEffect, useState } from 'react'
import './Novo_modelo.css'
import imgCadastroItens from '../img/imgCadastro.svg'
import logoJPets_adm from '../img/logoJPets.png'
import { notifications } from '@mantine/notifications'
import iconeVoltar from '../img/iconeVoltar.svg'

function Novo_modelo() {

  const [marcas, setMarcas] = useState([])
  const [marca_id, setMarca_id] = useState([])
  const [animais, setAnimal] = useState([])
  const [produtos, setProdutos] = useState([])
  const [produto_id, setProduto_id] = useState('')
  const [nome, setNome] = useState('')
  const [animal_id, setAnimal_id] = useState('')
  const errorIcon = <i className="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i className="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = "Cadastro | Modelos"
    pegarIdAnimais()
  }, [])

  // função para pegar o ID dos animais e colocar na lista suspensa
  // (animais > getAnimais)
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

  // função para pegar os produtos correspondentes dos animais
  // (produtos > getProdutosPorIdAnimal)
  async function pegarProdutosPorIdAnimal(animal_id) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/produtos/animais/" + animal_id)
      const dados = await resposta.json()
      console.log(dados) // console log para teste
      setProdutos(dados.map(value => {
        return { value: value.id.toString(), label: value.nome }
      }))
    } catch (error) {
      window.alert("Erro ao carregar produtos", error)
    }
  }

  // condição para carregar os produtos toda vez que seleciona um animal
  useEffect(() => {
    if (animal_id) {
      pegarProdutosPorIdAnimal(animal_id)
    }
  }, [animal_id])

  // função para pegar as marcas correspondentes dos produtos
  // (marcas > getMarcasPorIdProduto)
  async function pegarMarcasPorProduto(produto_id) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/marcas/produtos/" + produto_id)
      const dados = await resposta.json()
      console.log(dados) // console log para teste
      setMarcas(dados.map(value => {
        return { value: value.id.toString(), label: value.nome }
      }))
    } catch (error) {
      window.alert("Erro ao carregar produtos", error)
    }
  }

  // condição para carregar os produtos toda vez que seleciona um animal
  useEffect(() => {
    if (produto_id) {
      pegarMarcasPorProduto(produto_id)
    }
  }, [produto_id])

  // função para cadastrar modelo (modelos > postModelos)
  async function cadastrarModelo(event) {
    event.preventDefault()

    // dados para enviar para o backend
    const modeloDados = {
      marca_id: parseInt(marca_id),
      nome
    }


    try {
      // Realiza POST para a API
      const result = await fetch(process.env.REACT_APP_URL_API + '/modelos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(modeloDados)
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

      <a href="/administrador/painel/modelos" type="button" class="btnVoltarServico btn m-5 rounded-5">
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
            <p className="tituloNovoModelo fs-1 fw-semibold text-center mb-0 mb-md-4">Novo modelo</p>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-3">

              <select
                value={animal_id}
                onChange={(e) => setAnimal_id(e.target.value)}
                className="form-select "
                id="floatingSelect"
                aria-label="Floating label select example">

                <option value="">Selecione</option>
                {animais.map(animal => (
                  <option
                    key={animal.id}
                    value={animal.id}>{animal.nome}</option>
                ))}


              </select>
              <label for="floatingSelect">Animal</label>
            </div>

            {/* lista suspensa para selecionar o produto */}
            <div className="form-floating mb-3 mb-md-3">

              {/* lista suspensa para selecionar o produto correspondente ao animal */}
              <select
                value={produto_id}
                onChange={(e) => setProduto_id(e.target.value)}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">

                <option value="">Selecione</option>
                {produtos.map(produto => (
                  <option
                    key={produto.value}
                    value={produto.value}>{produto.label}</option>
                ))}
              </select>
              <label htmlFor="floatingSelect">Produto</label>
            </div>

            {/* lista suspensa para selecionar a marca */}
            <div className="form-floating mb-3 mb-md-3">

              <select
                value={marca_id}
                onChange={(e) => setMarca_id(e.target.value)}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">

                <option value="">Selecione</option>

                {marcas.map(marca => (
                  <option
                    key={marca.value}
                    value={marca.value}>{marca.label}</option>
                ))}

              </select>
              <label for="floatingSelect">Marca</label>
            </div>

            {/* Input para inserir o nome do modelo */}
            <div className="form-floating mb-3">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="" />
              <label for="floatingInput">Nome do modelo</label>
            </div>


            <button
              onClick={cadastrarModelo}
              className="btnNovoModelo btn w-100"
              role="button">Cadastrar modelo</button>

          </div>
          <div className="imgNovoModelo col-md-6 d-flex mt-3 mt-md-0 rounded-4">
            <img src={imgCadastroItens} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Novo_modelo