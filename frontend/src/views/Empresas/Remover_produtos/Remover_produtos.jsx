import { useState, useEffect } from 'react'
import Produtos_img from './img/Produtos_img.svg'
import './Remover_produtos.css'
import logoJPets from './img/logoJPets.png'
import { MultiSelect } from '@mantine/core';
import { notifications } from '@mantine/notifications'

function Remover_produtos() {

  const [animais, setAnimal] = useState([])
  const [produtos, setProdutos] = useState([])
  const [animalId, setAnimalId] = useState('')
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa)
  const [opcoes, setOpcoes] = useState([]);

  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = "Remover | Produtos"
    pegarIdAnimais()
  }, [])

  // função para pegar o ID dos animais
  //get    :: Empresas_Servicos/getServicosDaEmpresaPorIdEmpresaIdAnimal
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


  async function selectProdutos(animalId) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresasProdutos/" + idEmpresa + "/animais/" + animalId)
      const dados = await resposta.json()
      console.log(dados)

      setProdutos(dados.map(value => {
        return { value: value.produto_id.toString(), label: value.produtos.nome }
      }))

    } catch (error) {
      window.alert("Erro ao carregar serviços", error)
    }
  }

  async function removerProdutos() {

    const produtoDados = {
      animalId: parseInt(animalId),
      produtosId: opcoes.map(opcao => {
        return parseInt(opcao)
      })
    }

    console.log(produtoDados)

    try {
      const result = await fetch(process.env.REACT_APP_URL_API + "/empresasProdutos/" + idEmpresa, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoDados)
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
            <p className="tituloRemoverProdutosEmpresa fs-md-2 fs-3 fw-semibold text-center mb-4 mb-md-4 mt-md-5">
              Remover produtos
            </p>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={animalId}
                onChange={e => {
                  setAnimalId(e.target.value);
                  selectProdutos(e.target.value)
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

            {/* select múltiplo para escolher o produto */}
            <div className=" mb-3 mb-md-3">

              <label for="floatingSelect">Produtos</label>
              <MultiSelect className='multipleSelect'
                onChange={(e) => setOpcoes(e)}
                placeholder="Selecione"
                data={produtos}
              />
            </div>

            <button
              onClick={removerProdutos}
              className="btnRemoverProdutosEmpresa btn w-100 mt-md-4" role="button">
              Remover
            </button>

            <div className='text-center'>
              <a className="btn btn-dark btn-sm w-md-50 mt-md-4 mt-3" href="/empresas/removerMarcas" role="button">Remover marca</a>
            </div>

          </div>
          <div className="imgRemoverProdutosEmpresa col-md-6 d-flex mt-3 mt-md-0 rounded-4 p-3 justify-content-center">
            <img src={Produtos_img} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Remover_produtos