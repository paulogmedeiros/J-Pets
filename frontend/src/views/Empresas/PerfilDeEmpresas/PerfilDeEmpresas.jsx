import { useState, useEffect } from 'react'
import logoJPets from './img/logoJPets.png'
import teste from './img/teste.png'
import './PerfilDeEmpresas.css'
import axios from 'axios'
import { notifications } from '@mantine/notifications'
function PerfilDeEmpresas() {

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState(null)
  const [imagem, setImagem] = useState('')
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"))
  const token = JSON.parse(localStorage.getItem("token"))
  const usuario_id = decodedToken['usuario_id']
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa)
  const [carregando, setCarregando] = useState(false)
  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>
  useEffect(() => {
    document.title = "Perfil | Empresa"
    pegarInformacoes()
  }, []);

  async function pegarInformacoes() {
    try {

      if (!usuario_id) {
        window.location.href = './'
      }

      const resposta = await fetch(process.env.REACT_APP_URL_API + '/usuario/' + usuario_id, {
        method: 'GET',
        headers: {
          'x-access-token': token
        }
      })

      if (!resposta.ok) {
        throw new Error('HTTP Erro' + resposta.status)
      }

      const dados = await resposta.json()
      setEmail(dados.email)
      setNome(dados.empresas.nome_fantasia)
      setImagem(dados.empresas.foto_perfil)
    } catch (error) {
      throw new Error('HTTP Erro' + error)
    }
  }


  async function atualizarFoto() {
    if (!foto) {
      return
    }
    try {
      setCarregando(true)
      console.log(foto)
      const data = new FormData()
      data.append('imagem', foto)
      const resposta = await axios.post(process.env.REACT_APP_URL_API + "/empresas/imagem/" + idEmpresa, data)
      setTimeout(() => {
        setCarregando(false)
      }, 1500);
      pegarInformacoes()
      setFoto(null)
    } catch (error) {

    }
  }

  useEffect(() => {
    atualizarFoto()
  }, [foto]);

  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
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

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 text-center mt-md-5 mb-5 ">
            <div className="list-group">

              <a href="/empresas/perfil" className="list-group-item list-group-item-action active">Geral</a>
              <a href="/empresas/cadastroPerfil" className="list-group-item list-group-item-action">Cadastrar perfil</a>
              <a href="/empresas/cancelarAssinatura" className="list-group-item list-group-item-action">Cancelar assinatura</a>
              <a href="/empresas/desativar" className="list-group-item list-group-item-action">Desativar conta</a>
            </div>
          </div>

          <div className="col">
            <div className="text-start">
              <h1 className='tituloPerfilEmpresa'>Perfil profissional</h1>

              <div className="container text-center border shadow-sm p-3 mb-5 bg-body-tertiary rounded rounded-3 p-4">
                <div className="row">
                  <div className="col ">

                    <img src={process.env.REACT_APP_URL_API_IMG + imagem} width={120} height={120} style={{ borderRadius: "50%" }} />

                    <label htmlFor="formFile" class="form-label" style={{ backgroundColor: '#DEA100', outline: "none", cursor: 'pointer', padding: '8px 10px', borderRadius: '16px', color: "white", marginLeft: "15px" }}>Atualizar foto</label>

                    <input
                      accept='image/png'
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        setFoto(e.target.files[0])
                      }}
                      className="" type="file" id="formFile" style={{ backgroundColor: 'transparent', outline: "none", display: "none" }} />
                    <button type="button" className="btn btn-secondary m-3 rounded-4">Remover</button>
                  </div>
                  <div className="col p-4">
                    <h2>{nome}</h2>
                  </div>
                </div>
                <hr />
                <div className="container text-center mt-5">
                  <div className="row">
                    <div className="col-md-6">

                      <p className='text-start'>Email</p>
                      <input className="form-control mb-3" type="text" value={email} aria-label="Disabled input example" disabled readonly />
                      <p className='text-start'>Senha</p>
                      <input className="form-control" type="password" value="Senha" aria-label="Disabled input example" disabled
                        readonly />
                      <div className='mt-3 text-start'>
                        <a href="/senha/empresas/alteracao">Alterar senha</a>
                      </div>
                    </div>
                    {/* <div className="col">
                      <p className='text-start'>Contato</p>
                      <input className="form-control mb-3" type="text" value="279999999 " aria-label="Disabled input example" disabled readonly />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilDeEmpresas