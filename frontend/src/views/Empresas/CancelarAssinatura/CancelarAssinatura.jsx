import { useState, useEffect } from 'react';
import './CancelarAssinatura.css'
import logoJPets from './img/logoJPets.png'
import { notifications } from '@mantine/notifications'

function CancelarAssinatura() {

  const errorIcon = <i className="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i className="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>
  const idEmpresa = JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa;
  const [nome, setNome] = useState('')

  useEffect(() => {
    document.title = "Conta empresa"
    pegarInformacoes()
  }, [])

  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
  }

  async function pegarInformacoes() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresas/ " + idEmpresa)
      const dados = await resposta.json()
      setNome(dados.nome_fantasia)
    } catch (error) {
      window.alert(error)
      window.alert("Erro ao exibir cupom", error)
    }
  }

  async function cancelarAssinatura(event) {
    try {

      event.preventDefault()

      const result = await fetch(process.env.REACT_APP_URL_API + '/empresas/cancelar/assinatura/' + idEmpresa, {
        method: 'PUT',
      })

      const resposta = await result.json()
      
      if (result.status >= 400) { // Verifica se o status é 201 Created
        throw new Error(resposta.message)
      }

      notifications.show({ message: resposta.message, color: "white", icon: sucessIcon });
      
    } catch (error) {
      notifications.show({ message: error.message, color: "white", icon: errorIcon });
    }
  }

  return (
    <div>
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

      {/* Barra de navegação lateral */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 text-center mt-md-5 mb-5 ">
            <div className="list-group">

              <a href="/empresas/perfil" className="list-group-item list-group-item-action ">Geral</a>
              <a href="/empresas/cadastroPerfil" className="list-group-item list-group-item-action">Cadastrar perfil</a>
              <a href="/empresas/cancelarAssinatura" className="list-group-item list-group-item-action active">Cancelar assinatura</a>
              <a href="/empresas/desativar" className="list-group-item list-group-item-action">Desativar/ativar conta</a>
            </div>
          </div>

          <div className="col-md-9 text-center text-md-start">
            <h1 className='cancelarAssinaturaTitulo'>Perfil profissional</h1>
            <div className=' rounded-3 p-3 border rounded-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
              <h3 className='text-md-start mb-5'>{nome}</h3>
              <div className="w-100"></div>
              <h4>Cancelar assinatura</h4>
              <p>Tem certeza que deseja cancelar a assinatura? Você perderá todos os seus benefícios.</p>
              <button onClick={cancelarAssinatura} type="button" className="btn btn-danger">Cancelar assinatura</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CancelarAssinatura