import { useState, useEffect } from 'react'
import './BuscarProdutoGato.css'
import iconeVoltar from './img/iconeVoltar.svg'
import logoJPets from './img/logoJPets.png'
import imgBusca from './img/imgBusca.svg'
import iconeCoracao from './img/icone_coracao.svg'
import axios from 'axios';

function BuscarProdutoGato() {

  const [animal, setAnimal] = useState({});
  const [produtos, setProdutos] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [produto_id, setProduto_id] = useState('')
  const [marcas, setMarcas] = useState([])
  const [marca_id, setMarca_id] = useState([])
  const [modelos, setModelos] = useState([])
  const [modelo_id, setModelo_id] = useState([])

  // Função assíncrona para buscar produtos por ID do animal
  async function pegarProdutosPorIdAnimal(animal_id) {
    try {
      const response = await fetch(`http://localhost:3333/produtos/animais/${animal_id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar os produtos do animal');
      }
      const data = await response.json();
      // Transformar os dados para o formato desejado, se necessário
      const produtosFormatados = data.map((produto) => ({
        value: produto.id.toString(),
        label: produto.nome,
      }));
      // Atualizar o estado com os produtos encontrados
      setProdutos(produtosFormatados);
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
      // Tratar erro, exibir mensagem, etc.
      window.alert('Erro ao carregar produtos');
    }
  }

  async function visualizarEmpresas(){
    const sesaoBusca = {
      titulo: 'modelo',
      id: modelo_id,
      tipo: 'PDR'
    }
    console.log(sesaoBusca)
    localStorage.removeItem(sesaoBusca)
    localStorage.setItem("sesaoBusca", JSON.stringify(sesaoBusca));
    window.location.href = '/usuario/visualizarEmpresas'
  }

  async function visualizarEmpresasServicos(id){
    const sesaoBusca = {
      titulo: 'serviço',
      id: id,
      tipo: 'SVC'
    }
    console.log(sesaoBusca)
    localStorage.removeItem(sesaoBusca)
    localStorage.setItem("sesaoBusca", JSON.stringify(sesaoBusca));
    window.location.href = '/usuario/visualizarEmpresas'
  }

  // função para pegar as marcas correspondentes dos produtos
  // (marcas > getMarcasPorIdProduto)
  async function pegarMarcasPorProduto(produto_id) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/marcas/produtos/" + produto_id)
      const dados = await resposta.json()
      console.log(dados) // console log para teste
      setMarcas(dados.map(value => {
        return { value: value.id.toString(), label: value.nome }
      }))
    } catch (error) {
      window.alert("Erro ao carregar produtos", error)
    }
  }

  async function pegarModelosPorIdMarca(marca_id) {
    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/modelos/marcas/" + marca_id)
      const dados = await resposta.json()
      console.log(dados) // console log para teste

      setModelos(dados.map(value => {
        return { value: value.id.toString(), label: value.nome }
      }))
    } catch (error) {

    }
  }
  // ----------------------------------------------------------------------------------
  // função para buscar serviços do submenu dropdown
  const buscarServicos = () => {
    axios.get('http://localhost:3333/servicos')
      .then(response => {
        setServicos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar serviços:', error);
      });
  };

  // Filtra os serviços por animal
  const filtrarServicosPorAnimal = (animalId) => {
    return servicos.filter(servico => servico.animal_id === animalId);
  };

  useEffect(() => {
    buscarServicos(); // Chamada inicial para buscar os serviços

    // JavaScript para habilitar os submenus
    const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
    dropdownSubmenus.forEach(submenu => {
      submenu.addEventListener('mouseenter', function () {
        this.classList.add('show');
        this.querySelector('.dropdown-menu').classList.add('show');
      });
      submenu.addEventListener('mouseleave', function () {
        this.classList.remove('show');
        this.querySelector('.dropdown-menu').classList.remove('show');
      });
    });


    const fetchAnimalData = async () => {
      try {
        // Simulação de requisição à API para buscar dados dos animais
        const responseAnimais = await fetch('http://localhost:3333/animais');
        if (!responseAnimais.ok) {
          throw new Error('Erro ao buscar os dados dos animais');
        }
        const dataAnimais = await responseAnimais.json();

        // Encontrando o animal específico (no caso, Gato)
        const animalGato = dataAnimais.find((animal) => animal.nome === 'Gato');

        // Definindo o animal no estado
        setAnimal(animalGato);

        // Buscar produtos do animal específico
        await pegarProdutosPorIdAnimal(animalGato.id);

        // Definindo o título da página
        document.title = `Busca de Produtos | ${animalGato?.nome}`;
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        // Tratar erro, exibir mensagem, etc.
        window.alert('Erro ao carregar dados');
      }
    };

    fetchAnimalData();
  }, []);


  if (!animal.nome) {
    return <p>Carregando...</p>; // Ou qualquer indicador de carregamento que você queira
  }

  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
  }
  return (
    <>
      {/* Barra de navegação da página */}
      <nav className="navbarDonoDePet navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo do projeto */}
          <a className="navbar-brand" href="/usuario/principal">
            <img src={logoJPets} width={45} height={45} alt="Logo" />
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
                <a className="nav-link active" aria-current="page" href="/usuario/principal">Início</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cachorro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscarProdutos/cachorro">Produtos</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Serviços</a>
                    <ul className="dropdown-menu">
                      {filtrarServicosPorAnimal(1).map(servico => (
                        <li key={servico.id}><a className="dropdown-item" onClick={(e) => {visualizarEmpresasServicos(servico.id)}}>{servico.nome}</a></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gato
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscarProdutos/gato">Produtos</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Serviços</a>
                    <ul className="dropdown-menu">
                      {filtrarServicosPorAnimal(2).map(servico => (
                        <li key={servico.id}><a className="dropdown-item" onClick={(e) => {visualizarEmpresasServicos(servico.id)}}>{servico.nome}</a></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Adicione outros animais conforme necessário */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pássaro
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscarProdutos/passaro">Produtos</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Serviços</a>
                    <ul className="dropdown-menu">
                      {filtrarServicosPorAnimal(3).map(servico => (
                        <li key={servico.id}><a className="dropdown-item" onClick={(e) => {visualizarEmpresasServicos(servico.id)}}>{servico.nome}</a></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Peixe
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuario/buscarProdutos/peixe">Produtos</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Serviços</a>
                    <ul className="dropdown-menu">
                      {filtrarServicosPorAnimal(4).map(servico => (
                        <li key={servico.id}><a className="dropdown-item" onClick={(e) => {visualizarEmpresasServicos(servico.id)}}>{servico.nome}</a></li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='d-flex justify-content-end'>
            <div className=''>
              <span>
                <img src={iconeCoracao} width={40} height={40} alt="Ícone Coração" />
              </span>
            </div>
            <div className="dropdown me-5">
              <button className="btnPerfilEmpresa btn btn-secondary rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className='d-inline-block mt-2 text-truncate' style={{ maxWidth: '100px' }}>
                  {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
                </span>
              </button>
              <ul className="dropdown-menu">
                <a className="nav-link disabled ms-3" aria-disabled="true">
                  <span className='d-inline-block' style={{ maxWidth: '100px' }}>
                    {JSON.parse(localStorage.getItem("decodedToken"))?.nome}
                  </span>
                </a>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/usuario/perfil">Meu perfil</a></li>
                <li><button className="dropdown-item text-warning" onClick={logOff}>Sair</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Botão Voltar */}
      <a href="/usuario/principal" type="button" className="btnVoltarBusca btn m-5 rounded-5">
        <span>
          <img src={iconeVoltar} width={20} height={20} alt="Ícone Voltar" />
        </span>
        Voltar
      </a>

      {/* Container principal */}
      <div className="container">
        <div className="row justify-content-center col-12 col-md-8 position-absolute top-50 start-50 translate-middle border rounded-4 bg-light shadow-sm mb-5 bg-body-tertiary rounded">
          {/* Formulário e imagem */}
          <div className="col-md-6 d-flex-md-5 mt-5 mt-md-0 p-5">
            {/* Título */}
            <p className="tituloBusca fs-1 fw-semibold text-center mb-0">Buscar produto</p>
            <hr className="mb-md-5" />

            {/* Input para inserir o nome do modelo */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder=""
                value={animal.nome} // Popula o campo com o nome do animal
                readOnly
              />
              <label htmlFor="floatingInput">Nome do animal</label>
            </div>

            {/* Selecionar produto */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={produto_id}
                onChange={(e) => {
                  setProduto_id(e.target.value)
                  pegarMarcasPorProduto(e.target.value)
                }}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>
                {produtos.map((produto) => (
                  <option key={produto.value} value={produto.value}>
                    {produto.label}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelect">Produto</label>
            </div>


            {/* Selecionar marca */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={marca_id}
                onChange={(e) => {
                  setMarca_id(e.target.value)
                  pegarModelosPorIdMarca(e.target.value)
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

            {/* Selecionar modelo */}
            <div className="form-floating mb-3 mb-md-3">
              <select
                value={modelo_id}
                onChange={(e) => setModelo_id(e.target.value)}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example">
                <option value="">Selecione</option>

                {modelos.map(modelo => (
                  <option key={modelo.value} value={modelo.value}>
                    {modelo.label}
                  </option>
                ))}

              </select>
              <label htmlFor="floatingSelect">Modelo</label>
            </div>
            {/* Botão de busca */}
            <button onClick={visualizarEmpresas} className="btnBuscar border btn w-100" role="button">
              Buscar
            </button>
          </div>

          {/* Imagem de busca */}
          <div className="imgBusca col-md-6 d-flex mt-3 mt-md-0 rounded-4 p-3">
            <img src={imgBusca} className="img-fluid" alt="Imagem de Busca" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BuscarProdutoGato