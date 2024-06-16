import { useState, useEffect } from 'react'
import Modelos_img from './img/Modelos_img.svg'
import './Adicionar_modelos.css'
import logoJPets from './img/logoJPets.png'
import { MultiSelect } from '@mantine/core';
import { notifications } from '@mantine/notifications'

function Adicionar_modelos() {

  const [animais, setAnimal] = useState([])
  const [animalId, setAnimalId] = useState('')
  const [produtos, setProdutos] = useState([])
  const [produto_id, setProduto_id] = useState('')
  const [marca_id, setMarca_id] = useState('')
  const [modelos, setModelos] = useState([])
  const [marcas, setMarcas] = useState([])
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa)
  const [opcoes, setOpcoes] = useState([]);

  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = 'Cadastro | Modelos'
    pegarIdAnimais() // lista de animais carrega ao entrar na página
  }, [])

  // função para pegar o ID dos animais
  // (animais > getAnimais)
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

  // função para pegar as marcas por id empresa e id animal
  // (Empresas_Marcas > getEmpresasMarcasPorIdEmpresaIdAnimal)
  async function pegarEmpresasMarcasPorIdEmpresaIdProduto(produto_id) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresasMarcas/" + idEmpresa + "/produto/" + produto_id)

      const dados = await resposta.json()
      console.log(dados)
      setMarcas(dados.map(value => {
        return { value: value.marca_id.toString(), label: value.marcas.nome }
      }))

    } catch (error) {
      window.alert("Erro ao carregar marcas", error)
    }
  }

  useEffect(() => {
    if (produto_id) {
      pegarEmpresasMarcasPorIdEmpresaIdProduto(produto_id)
    }
  })
  // função para pegar os modelos disponíveis de acordo com a marca escolhida
  // (modelos > getModelosPorIdMarcaIdEmpresa)
  async function pegarModelosPorIdMarcaIdEmpresa(marca_id) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/modelos/marcas/" + marca_id + "/empresa/" + idEmpresa)

      const dados = await resposta.json()
      console.log(dados)
      setModelos(dados.map(value => {
        return { value: value.id.toString(), label: value.nome }
      }))
    } catch (error) {
      window.alert("Erro ao carregar modelos", error)
    }
  }

  useEffect(() => {
    if (marca_id) {
      pegarModelosPorIdMarcaIdEmpresa(marca_id)
    }
  })
  // função para adicionar modelos
  // (Empresas_Modelos > postEmpresasModelos)
  async function adicionarModelos(event) {
    event.preventDefault()

    const modeloDados = {
      empresaId: parseInt(idEmpresa),
      modelosId: opcoes.map(opcao => {
        return parseInt(opcao)
      })
    }
    console.log(modeloDados)

    try {
      const result = await fetch(process.env.REACT_APP_URL_API + "/empresasModelos", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(modeloDados)
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
                <a className="nav-link" href="#">Avaliações</a>
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
              <li><a className="dropdown-item" href="#">Meu perfil</a></li>
              <li><a className="dropdown-item text-warning" href="/">Sair</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">

        {/* container para formulario e imagem */}
        <div className="row justify-content-center border rounded-4 bg-light shadow-sm mb-5 bg-body-tertiary rounded col-12 col-md-8 position-absolute top-50 start-50 translate-middle ">

          {/* container para formulario */}
          <div className="col-md-6 p-5 d-flex-md-5 mt-5 mt-md-0">

            {/* Título */}
            <p className="tituloAdicionarModeloEmpresa fs-md-2 fs-3 fw-semibold text-center mb-4 mb-md-4 mt-md-0">
              Adicionar modelos
            </p>

            {/* lista suspensa para escolher o animal */}
            <div className="form-floating mb-3 mb-md-4">
              <select
                value={animalId}
                onChange={(e) => {
                  setAnimalId(e.target.value);
                  pegarProdutosPorIdEmpresaIdAnimal(e.target.value);
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
                  // selectMarcas(e.target.value)
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

            {/* lista suspensa para selecionar a marca */}
            <div className="form-floating mb-3 mb-md-4">
              <select
                value={marca_id}
                onChange={(e) => {
                  setMarca_id(e.target.value);
                  pegarModelosPorIdMarcaIdEmpresa(e.target.value)
                }}
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

            {/* select múltiplo para escolher os modelos */}
            <div className=" mb-3 mb-md-4">
              <label for="floatingSelect">Modelos</label>
              <MultiSelect className='multipleSelect'
                onChange={(e) => setOpcoes(e)}
                placeholder="Selecione"
                data={modelos}
              />
            </div>
            <button
              onClick={adicionarModelos}
              className="btnAdicionarModeloEmpresa btn w-100 mt-md-4"
              role="button">
              Adicionar
            </button>
          </div>
          <div className="imgAdicionarModeloEmpresa col-md-6 justify-content-center d-flex mt-3 mt-md-0 rounded-4 p-3">
            <img src={Modelos_img} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adicionar_modelos