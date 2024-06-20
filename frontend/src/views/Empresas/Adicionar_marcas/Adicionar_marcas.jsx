import { useState, useEffect } from 'react'
import Adicionar_marcas_img from './img/Marcas_img.svg'
import './Adicionar_marcas.css'
import logoJPets from './img/logoJPets.png'
import { MultiSelect } from '@mantine/core';
import { notifications } from '@mantine/notifications'

function Adicionar_marcas() {

  const [animais, setAnimal] = useState([])
  const [produtos, setProdutos] = useState([])
  const [produto_id, setProduto_id] = useState('')
  const [marcasId, setMarcasId] = useState('')
  const [animalId, setAnimalId] = useState('')
  const [marcas, setMarcas] = useState([])
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa)
  const [opcoes, setOpcoes] = useState([]);

  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = 'Cadastro | Marcas'
    pegarIdAnimais() // lista de animais carrega ao entrar na página
  }, [])

  // função para pegar o ID dos animais

  async function pegarIdAnimais() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresasAnimais/ " + idEmpresa)

      const dados = await resposta.json()
      console.log(dados)
      setAnimal(dados.map(value => {
        return { value: value.animal_id.toString(), label: value.animais.nome }
      }))

    } catch (error) {
      window.alert("Erro ao carregar animais", error)
    }
  }

  // função para pegar o produto de acordo com o ID do animal
  // (Empresas_Produtos > getEmpresasProdutosPorIdEmpresaIdAnimal)
  async function pegarProdutosPorIdEmpresaIdAnimal(animalId) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresasProdutos/" + idEmpresa + "/animais/" + animalId)

      const dados = await resposta.json()
      console.log(dados)
      setProdutos(dados.map(value => {
        return { value: value.produto_id.toString(), label: value.produtos.nome }
      }))

    } catch (error) {
      window.alert(error)
      window.alert("Erro ao carregar produtos", error)
    }
  }

  // já carrega os produtos caso um animal seja selecionado
  useEffect(() => {
    if (animalId) {
      pegarProdutosPorIdEmpresaIdAnimal(animalId)
    }
  }, [animalId])

  // função para pegar as marcas de acordo com o id do produto e o id da empresa
  // (marcas > getMarcasPorIdProdutoIdEmpresa)
  async function selectMarcas(produto_id) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/marcas/produtos/" + produto_id + "/empresa/" + idEmpresa)

      const dados = await resposta.json()
      console.log(dados)

      setMarcas(dados.map(value => {
        return { value: value.id.toString(), label: value.nome }
      }))
    } catch (error) {
      window.alert(error)
      window.alert("Erro ao carregar marcas", error)
    }
  }
  // função para adicionar marcas
  async function adicionarMarcas(event) {
    event.preventDefault()

    const marcaDados = {
      empresaId: parseInt(idEmpresa),
      marcasId: opcoes.map(opcao => {
        return parseInt(opcao)
      })
    }
    console.log(marcaDados)

    try {
      const result = await fetch(process.env.REACT_APP_URL_API + "/empresasMarcas", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(marcaDados)
      })
      const resposta = await result.json()
      console.log(resposta.status, result.status)

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
    <>
      <nav className="navbarEmpresas navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo do projeto */}
          <a className="navbar-brand" href="#">
            <img src={logoJPets} width={45} height={45} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Itens da barra de navegação */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/empresas/principal">Início</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Produtos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/empresas/visualizarProdutos">Visualizar produtos</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarProdutos">Adicionar produtos</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerProdutos">Remover produtos</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarMarcas">Adicionar marcas</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerMarcas">Remover marcas</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarModelos">Adicionar modelos</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerModelos">Remover modelos</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Serviços
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/empresas/visualizarServicos">Visualizar serviços</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/empresas/adicionarServicos">Adicionar serviços</a></li>
                  <li><a className="dropdown-item" href="/empresas/removerServicos">Remover serviços</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/empresas/cupons">Cupons</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/empresas/avaliacoes">Avaliações</a>
              </li>
            </ul>
          </div>
          <div className="dropdown me-5">
            <button className="btnPerfilEmpresa btn btn-secondary rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span className='d-inline-block mt-2 text-truncate' style={{ maxWidth: '100px' }}>
                {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
              </span>
            </button>
            <ul className="dropdown-menu">
              <a className="nav-link disabled ms-3" aria-disabled="true"><span className='d-inline-block mt-2 text-truncate' style={{ maxWidth: '100px' }}>
                {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
              </span></a>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/empresas/perfil">Meu perfil</a></li>
              <li><button className="dropdown-item text-warning" onClick={logOff}>Sair</button></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">

        {/* container para formulario e imagem */}
        <div className="row justify-content-center border rounded-4 bg-light shadow-sm mb-5 bg-body-tertiary rounded col-12 col-md-8 position-absolute top-50 start-50 translate-middle ">

          {/* container para formulario */}
          <div className="col-md-6 d-flex-md-5 mt-5 mt-md-0 p-5">

            {/* Título */}
            <p className='tituloAdicionarMarcaEmpresa fs-md-2 fs-3 fw-semibold text-center mb-4 mb-md-4 mt-md-5'>
              Adicionar marcas
            </p>

            {/* lista suspensa para escolher o animal */}
            <div className="form-floating mb-3 mb-md-4">
              <select
                value={animalId}
                onChange={(e) => {
                  setAnimalId(e.target.value);
                }}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">

                <option value="">Selecione</option>
                {animais.map(animal => (
                  <option
                    key={animal.value}
                    value={animal.value}>{animal.label}</option>
                ))}

              </select>
              <label for="floatingSelect">Animal</label>
            </div>

            {/* lista suspensa para selecionar o produto */}
            <div className="form-floating mb-3 mb-md-4">
              <select
                value={produto_id}
                onChange={(e) => {
                  setProduto_id(e.target.value);
                  selectMarcas(e.target.value)
                }}
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
              <label for="floatingSelect">Produto</label>
            </div>

            {/* select múltiplo para escolher a marca */}
            <div className=" mb-3 mb-md-4">
              <label for="floatingSelect">Marcas</label>
              <MultiSelect className='multipleSelect'
                onChange={(e) => setOpcoes(e)}
                placeholder="Selecione"
                data={marcas}
              />
            </div>

            <button
              onClick={adicionarMarcas}
              className="btnAdicionarMarcaEmpresa btn w-100 mt-md-4" role="button">
              Adicionar
            </button>

            <div className='text-center'>
              <a className="btn btn-dark btn-sm w-md-50 mt-md-4 mt-3" href="/empresas/adicionarModelos" role="button">Adicionar modelo</a>
            </div>

          </div>
          <div className="imgAdicionarProdutosEmpresa text-center justify-content-center col-md-6 d-flex mt-3 mt-md-0 rounded-4 p-3">
            <img src={Adicionar_marcas_img} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adicionar_marcas