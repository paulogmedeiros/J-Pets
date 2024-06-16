import { useState, useEffect } from 'react';
import './Visualizar_produtos.css';
import logoJPets from './img/logoJPets.png';
import iconePesquisa from './img/iconePesquisa.svg';

function Visualizar_produtos() {

  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState('');  // Estado para armazenar o texto da pesquisa
  const [idEmpresa, setIdEmpresa] = useState(JSON.parse(localStorage.getItem("decodedToken"))?.idEmpresa);

  useEffect(() => {
    document.title = "Tabela de produtos";
    pegarProdutos();
  }, []); // Adicione um array de dependências vazio aqui para chamar apenas uma vez

  async function pegarProdutos() {
    const resposta = await fetch(process.env.REACT_APP_URL_API + "/empresasModelos/" + idEmpresa);
    const dados = await resposta.json();
    console.log(dados);
    // Transformando os dados para facilitar a renderização
    const produtosTransformados = dados.map(dado => ({
      produto: dado.modelos.marcas.produtos.nome,
      marca: dado.modelos.marcas.nome,
      modelo: dado.modelos.nome,
      animal: dado.modelos.marcas.produtos.animais.nome
    }));
    setProdutos(produtosTransformados);
  }

  // Função para atualizar o estado do filtro
  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  // Filtrando os produtos com base no filtro de pesquisa
  const produtosFiltrados = produtos.filter(produto =>
    produto.produto.toLowerCase().includes(filtro.toLowerCase()) ||
    produto.marca.toLowerCase().includes(filtro.toLowerCase()) ||
    produto.modelo.toLowerCase().includes(filtro.toLowerCase()) ||
    produto.animal.toLowerCase().includes(filtro.toLowerCase())
  );

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

      <div className="">
        <div className="">
          <div className="container text-center mt-5 border p-4 rounded-4">
            <div className="row ">
              <div className="col-6 text-start">
                <h2>Produtos</h2>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar produtos"
                    aria-label="Pesquisar produtos"
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
                  <th scope="col">Produtos</th>
                  <th scope="col">Marcas</th>
                  <th scope="col">Modelos</th>
                  <th scope="col">Animais</th>
                </tr>
              </thead>
              <tbody>
                {produtosFiltrados.map((produto, index) => (
                  <tr key={index}>
                    <td>{produto.produto}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.modelo}</td>
                    <td>{produto.animal}</td>
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

export default Visualizar_produtos;
