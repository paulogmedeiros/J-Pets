import { useState, useEffect } from 'react'
import './Cupons.css'
import logoJPets from './img/logoJPets.png'
import { notifications } from '@mantine/notifications'
import { Loader } from '@mantine/core';
function Cupons() {

  const [porcentagemCupom, setPorcentagemCupom] = useState('')
  const [nomeCupom, setNomeCupom] = useState('')
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa)
  const [cupom, setCupom] = useState('')
  const [carregando, setCarregando] = useState(false)

  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {
    document.title = "Cupom"
    exibirCupom()
  }, [])

  async function atualizarCupom() {
    const cupomDados = {
      porcentagemCupom,
      nomeCupom
    }
    console.log(cupomDados)
    try {
      const result = await fetch(process.env.REACT_APP_URL_API + '/empresas/criar/cupom/' + idEmpresa, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(cupomDados)
      })
      const resposta = await result.json()
      console.log(resposta.status, result.status)

      if (result.status >= 400) { // Verifica se o status é 201 Created
        throw new Error(resposta.message)
      }

      notifications.show({ message: resposta.message, color: "white", icon: sucessIcon });
      exibirCupom()
      setTimeout(() => {
      }, 1500);


    } catch (error) {
      console.log(error)
      notifications.show({ message: error.message, color: "white", icon: errorIcon });
    }
  }

  async function exibirCupom() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresas/ " + idEmpresa)
      const dados = await resposta.json()
      console.log(dados)

      // porcentagemCupom = dados.porcentagem_cupom
      // nomeCupom = dados.nome_cupom
      if (!dados.nomeCupom) {
        setCupom("Exemplo nome")
      }

      setCupom(`${dados.nome_cupom}${dados.porcentagem_cupom}`)

    } catch (error) {
      window.alert(error)
      window.alert("Erro ao exibir cupom", error)
    }
  }

  async function apagarCupom() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresas/excluir/cupom/" + idEmpresa, {
        method: "PUT",
      })
      const dados = await resposta.json()
      console.log(dados)
      setCupom('')
    } catch (error) {
      window.alert("Erro ao deletar cupom", error)
    }
  }

  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
  }

  return (
    <div>

      <div>
        {/* Inicio da barra de navegação */}
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

      </div>

      {/* Área de descontos */}

      <div className="container text-center mt-5 pt-md-5">

        <div className="row ">
          <div className="col-md-6 ">
            <h1 className='tituloAreaDescontos fw-semibold'>Área de descontos</h1>
            <div className='container border rounded-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded'>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label mt-3 fs-3">Nome do desconto</label>
                <input
                  value={nomeCupom}
                  onChange={(e) => setNomeCupom(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex.: Paulo" />
              </div>

              <select
                value={porcentagemCupom}
                onChange={(e) => setPorcentagemCupom(e.target.value)}
                className="form-select mb-3 w-100 "
                aria-label="Default select example">
                <option value="">Selecione</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
              </select>

              <button className="btnGerarCupom btn mb-5 mt-5" onClick={atualizarCupom}>Gerar cupom</button>
            </div>
          </div>

          <div className="col-md-6 mt-5 mt-md-0 mb-3">
            <h1 className='tituloCupom fw-semibold '>Cupom gerado</h1>
            <div className='container border rounded-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded p-5'>
              <div className='containerCupomGerado rounded-3 p-md-2'>

                <div className="text-end pb-5 ms-5">
                  <button
                    onClick={apagarCupom}
                    type="button"
                    className="btn-close"
                    aria-label="Close"></button>
                </div>

                <h1 className='pb-5'>{cupom}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cupons