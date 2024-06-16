import { useState, useEffect } from 'react'
import './Remover_servicos.css'
import Servicos_img from './img/Servicos_img.svg'
import logoJPets from './img/logoJPets.png'
import { MultiSelect } from '@mantine/core';
import { notifications } from '@mantine/notifications'
import { Loader } from '@mantine/core';

function Remover_servicos() {
  const [animais, setAnimal] = useState([])
  const [servicos, setServicos] = useState([])
  const [animalId, setAnimalId] = useState('')
  const [servicosId, setServicosId] = useState('')
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa)
  const [opcoes, setOpcoes] = useState([]);
  const [carregando, setCarregando] = useState(false)
  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = "Remover | Serviços"
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

  // função para selecionar serviços a partir do animal escohido
  async function selectServicos(animalId) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresasSevico/" + idEmpresa + "/animais/" + animalId)
      const dados = await resposta.json()
      console.log(dados)

      setServicos(dados.map(value => {
        return { value: value.servico_id.toString(), label: value.servicos.nome }
      }))

    } catch (error) {
      window.alert("Erro ao carregar serviços", error)
    }
  }

  async function removerServicos() {

    const servicoDados = {
      animalId: parseInt(animalId),
      servicosId: opcoes.map(opcao => {
        return parseInt(opcao)
      })
    }
    console.log(servicoDados)

    try {
      const result = await fetch(process.env.REACT_APP_URL_API + "/empresasSevico/" + idEmpresa, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(servicoDados)
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
        <div className="row justify-content-center border rounded-4 bg-light shadow-sm mb-5 bg-body-tertiary rounded col-12 ps-4 col-md-8 position-absolute top-50 start-50 translate-middle ">

          {/* container para formulario */}
          <div className="col-md-6 d-flex-md-5 mt-5 mt-md-0 p-5">

            {/* Título */}
            <p className="tituloRemoverServicoEmpresa fs-2 fw-semibold text-center mb-4 mb-md-5">
              Remover serviços
            </p>

            {/* lista suspensa para selecionar o animal */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={animalId}
                onChange={e => {
                  setAnimalId(e.target.value);
                  selectServicos(e.target.value)
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

            {/* select multilevel para escolher o serviço */}
            <div className=" mb-3 mb-md-3">

              <label for="floatingSelect">Serviços</label>
              <MultiSelect className='multipleSelect'
                onChange={(e) => setOpcoes(e)}
                placeholder="Selecione"
                data={servicos}
              />
            </div>

            <button
              onClick={removerServicos}
              className="btnRemoverServicoEmpresa btn w-100"
              role="button">
              Remover
            </button>
          </div>
          <div className="imgRemoverServicosEmpresa col-md-6 d-flex mt-3 mt-md-0 rounded-4">
            <img src={Servicos_img} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Remover_servicos