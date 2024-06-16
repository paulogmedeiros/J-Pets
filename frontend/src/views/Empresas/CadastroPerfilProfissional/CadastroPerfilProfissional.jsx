import { useState,useEffect } from 'react';
import logoJPets from './img/logoJPets.png';
import './CadastroPerfilProfissional.css';
import { notifications } from '@mantine/notifications'

function CadastroPerfilProfissional() {

  useEffect(() => {
    document.title = "Cadastro de perfil"
    pegarInformacoes()
  },[])
  
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa);
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('')
  const [numeroResidencia, setNumeroResidencia] = useState('')
  const [diaSemanaFim, setDiaSemanaFim] = useState('')
  const [diaSemanaInicio, setDiaSemanaInicio] = useState('')
  const [horaAbertura, setHoraAbertura] = useState('')
  const [horaFechamento, setHoraFechamento] = useState('')

  const errorIcon = <i className="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i className="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  const [endereco, setEndereco] = useState({
    rua: '',
    bairro: '',
    cidade: '',
    uf: ''
  });

  // função para a API de CEP ViaCEP
  const handleCepChange = (e) => {
    const cepValue = e.target.value;
    setCep(cepValue);

    if (cepValue.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            setEndereco({
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              uf: data.uf
            });
          } else {
            alert('CEP não encontrado');
          }
        })
        .catch(() => {
          alert('Erro ao buscar CEP');
        });
    }
  };

  async function cadastrarPerfilProfissional(event) {
    try {
      event.preventDefault()

      const perfilDados = {
        cep,
        rua: endereco.rua,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        uf: endereco.uf,
        telefone,
        numeroResidencia,
        diaSemanaFim,
        diaSemanaInicio,
        horaAbertura,
        horaFechamento
      }

      const result = await fetch(process.env.REACT_APP_URL_API + '/empresas/informacoes/' + idEmpresa, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' // Especificando o corpo como JSON
        },
        body: JSON.stringify(perfilDados)
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

  async function pegarInformacoes() {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresas/ " + idEmpresa)
      const dados = await resposta.json()
      console.log(dados)

      setCep(dados.cep)
      setEndereco({
        rua: dados.rua,
        bairro: dados.bairro,
        cidade: dados.cidade,
        uf: dados.uf,
      })

        setTelefone(dados.telefone)
        setNumeroResidencia(dados.numero_residencia)
        setDiaSemanaFim(dados.dia_semana_fim)
        setDiaSemanaInicio(dados.dia_semana_inicio)
        setHoraAbertura(dados.hora_abertura)
        setHoraFechamento(dados.hora_fechamento)

    } catch (error) {
      window.alert(error)
      window.alert("Erro ao exibir cupom", error)
    }
  }

  return (
    <div>
      <nav className="navbarEmpresas navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo do projeto */}
          <a className="navbar-brand" href="#">
            <img src={logoJPets} width={45} height={45} alt="Logo JPets" />
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

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 text-center mt-md-5 mb-5">
            <div className="list-group">

              <a href="/empresas/perfil" className="list-group-item list-group-item-action ">Geral</a>
              <a href="/empresas/cadastroPerfil" className="list-group-item list-group-item-action active">Cadastrar perfil</a>
              <a href="/empresas/cancelarAssinatura" className="list-group-item list-group-item-action">Cancelar assinatura</a>
              <a href="/empresas/desativar" className="list-group-item list-group-item-action">Desativar conta</a>
            </div>
          </div>

          <div className="col-md-9 container col-11 text-center ">
            <h1 className='perfilProfissionalTitulo text-md-start'>Cadastre seu perfil</h1>

            <div className="row mt-3 rounded-3 p-3 border rounded-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <h3 className='text-start'>Jamille Galazi</h3>
              <hr />
              <div className="col-md-3">
                <div className="mb-3 text-start">
                  <label htmlFor="cep" className="form-label">CEP</label>
                  <input type="number" className="form-control" id="cep" value={cep} onChange={handleCepChange} />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-3 text-start">
                  <label htmlFor="rua" className="form-label">Rua</label>
                  <input
                    onChange={(e) => setEndereco.rua(e.target.value)}
                    type="text"
                    className="form-control"
                    id="rua"
                    value={endereco.rua} />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 text-start">
                  <label htmlFor="bairro" className="form-label">Bairro</label>
                  <input
                    onChange={(e) => setEndereco.bairro(e.target.value)}
                    type="text"
                    className="form-control"
                    id="bairro"
                    value={endereco.bairro} />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md-4">
                <div className="mb-3 text-start">
                  <label htmlFor="cidade" className="form-label">Cidade</label>
                  <input
                    onChange={(e) => setEndereco.cidade(e.target.value)}
                    type="text"
                    className="form-control"
                    id="cidade"
                    value={endereco.cidade} />
                </div>
              </div>
              <div className="col-md-1">
                <div className="mb-3 text-start">
                  <label htmlFor="uf" className="form-label">UF</label>
                  <input
                    onChange={(e) => setEndereco.uf(e.target.value)}
                    type="text"
                    className="form-control text-center"
                    id="uf"
                    value={endereco.uf} />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-3 text-start">
                  <label
                    htmlFor="contato" className="form-label">Contato</label>
                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    type="number"
                    className="form-control"
                    id="contato" placeholder="" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="mb-3 text-start">
                  <label htmlFor="contato" className="form-label">N° Residência</label>
                  <input
                    value={numeroResidencia}
                    onChange={(e) => setNumeroResidencia(e.target.value)}
                    type="number"
                    className="form-control"
                    id="contato"
                    placeholder="" />
                </div>
              </div>
              <h4 className='text-start mt-2'>Funcionamento</h4>
              <hr />
              <div className="container text-center">
                <div className="row">
                  <div className="col-md-6">
                    <p>Horário</p>
                    <div className="container text-center">

                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="horarioInicio" className="form-label">Início</label>
                            <input
                              value={horaAbertura}
                              onChange={(e) => setHoraAbertura(e.target.value)}
                              type="time"
                              className="form-control"
                              id="horarioInicio" placeholder="" />
                          </div>

                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="horarioFim" className="form-label">Fim</label>
                            <input
                              value={horaFechamento}
                              onChange={(e) => setHoraFechamento(e.target.value)}
                              type="time"
                              className="form-control"
                              id="horarioFim" placeholder="" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Dias</p>
                    <div className="container text-center">
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="diaInicio" className="form-label">Início</label>
                            <select
                              value={diaSemanaInicio}
                              onChange={(e) => setDiaSemanaInicio(e.target.value)}
                              className="form-select"
                              aria-label="Default select example">
                              <option value="">Selecione</option>

                              <option value="segunda-feira">Segunda-feira</option>
                              <option value="terca-feira">Terça-feira</option>
                              <option value="quarta-feira">Quarta-feira</option>
                              <option value="quinta-feira">Quinta-feira</option>
                              <option value="sexta-feira">Sexta-feira</option>
                              <option value="sabado">Sábado</option>
                              <option value="domingo">Domingo</option>
                            </select>
                          </div>
                        </div>

                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="diaFim" className="form-label">Fim</label>
                            <select
                            value={diaSemanaFim}
                            onChange={(e) => setDiaSemanaFim(e.target.value)}
                              className="form-select"
                              aria-label="Default select example">
                                <option value="">Selecione</option>
                              <option value="segunda-feira">Segunda-feira</option>
                              <option value="terça-feira">Terça-feira</option>
                              <option value="quarta-feira">Quarta-feira</option>
                              <option value="quinta-feira">Quinta-feira</option>
                              <option value="sexta-feira">Sexta-feira</option>
                              <option value="sábado">Sábado</option>
                              <option value="domingo">Domingo</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
              onClick={cadastrarPerfilProfissional}
              type="button"
              className="btn btn-warning w-25 mt-5">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroPerfilProfissional;
