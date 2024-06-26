import { useState, useEffect } from 'react';
import './Visualizar_servicos.css';
import logoJPets from './img/logoJPets.png';
import iconePesquisa from './img/iconePesquisa.svg';

function Visualizar_servicos() {

  const [servicos, setServicos] = useState([]);
  const [filtro, setFiltro] = useState(''); // Estado para armazenar o texto da pesquisa
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa);

  useEffect(() => {
    document.title = "Tabela de serviços";
    pegarServicos();
  }, []); // Adicione um array de dependências vazio aqui para chamar apenas uma vez

  async function pegarServicos() {
    const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresasSevico/" + idEmpresa);
    const dados = await resposta.json();
    console.log(dados);

    // Transformando os dados para facilitar a renderização
    const servicosTransformados = dados.map(dado => ({
      servico: dado.servicos.nome,
      animal: dado.servicos.animais.nome
    }));
    setServicos(servicosTransformados);
  }

  // Função para atualizar o estado do filtro
  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  // Filtrando os serviços com base no filtro de pesquisa
  const servicosFiltrados = servicos.filter(servico =>
    servico.servico.toLowerCase().includes(filtro.toLowerCase()) ||
    servico.animal.toLowerCase().includes(filtro.toLowerCase())
  );

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

      <div className="">
        <div className="">
          <div className="container text-center mt-5 border p-4 rounded-4">
            <div className="row ">
              <div className="col-6 text-start">
                <h2>Serviços</h2>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar serviços"
                    aria-label="Pesquisar serviços"
                    aria-describedby="basic-addon2"
                    value={filtro}
                    onChange={handleFiltroChange}
                  />
                  <span className="input-group-text bg-warning" id="basic-addon2"><img src={iconePesquisa} width={20} /></span>
                </div>
              </div>
            </div>
            <table className="container mt-1 p-4 border table table-striped">
              <thead className='tabelaProdutosEmpresas'>
                <tr>
                  <th scope="col">Serviços</th>
                  <th scope="col">Animais</th>
                </tr>
              </thead>
              <tbody>
                {servicosFiltrados.map((servico, index) => (
                  <tr key={index}>
                    <td>{servico.servico}</td>
                    <td>{servico.animal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visualizar_servicos;
