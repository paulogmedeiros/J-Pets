import { useEffect, useState } from "react";
import logoJPets_adm from "../img/logoJPets.png";
import"./Painel_de_controle_marcas.css";
import pesquisaIcone_adm from "../img/pesquisa_icone.svg";
import botaoMais from "../img/botao_mais.svg";
import iconeAtualizar_adm from "../img/icone_atualizar.svg";
import iconLixeira_adm from "../img/icone_lixeira.svg";

function Painel_de_controle_marcas() {
  //Estado para armazenar os usuários
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {

    document.title = "Painel de controle | Marcas"

    // Chamando função carregar usuários
    carregarMarcas();
  });

  // Função carregar usuários
  async function carregarMarcas() {
    try {
      // Fazer uma chamada da API
      const resposta = await fetch(process.env.REACT_APP_URL_API +"/marcas");
      if (!resposta.ok) {
        // Exibindo erro API
        console.debug("HTTP erro:" + resposta.status);
      } else {
        let dados = await resposta.json();
        setMarcas(dados);
      }
    } catch (error) {
      console.error("Erro ao buscar marcas" + error);
    }
  }

  async function deletarMarca(marca_id) {
    if (window.confirm("Tem certeza que deseja deletar essa marca?")) {
      try {
        const resposta = await fetch(process.env.REACT_APP_URL_API +"/marcas/" + marca_id, {
          method: "DELETE",
        });
        if (!resposta.ok) {
          throw new Error("Falha ao deletar marca");
        } else {
          // não obrigatório
          carregarMarcas();
        }
      } catch (error) {
        console.error("Erro ao deletar marca: ", error);
      }
    }
  }

  return (
    // Container geral para propriedades de fundo
    <div className="admPainel">
      <nav className="admNavbar navbar navbar-expand-lg">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#">
            <img src={logoJPets_adm} alt="" srcSet="" width={50} height={50} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>

          </button>
          <div className="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button className="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    P.G.
                  </button>

                  <ul className="dropdown-menu ">
                    <li>
                      <a className="dropdown-item disabled" href="#">Paulo Gabriel</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"> Meu perfil</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Sair </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal  */}
      <div className="container mt-5">
        <div className="row">

          {/* Menu lateral */}
          <div className="admMenuLateral col-3 mt-5 pr-5">
            <div id="list-example" className="list-group">
              <a className="list-group-item list-group-item-action" href="/administrador/painel">Empresas</a>
              <a className="list-group-item list-group-item-action" href="/administrador/painel/cadastroAdmin">Cadastrar admin</a>
              <a className="list-group-item list-group-item-action" href="/administrador/painel/produtos">Produtos</a>
              <a className="list-group-item list-group-item-action" href="/administrador/painel/marcas">Marcas</a>
              <a className="list-group-item list-group-item-action" href="/administrador/painel/modelos">Modelos</a>
              <a className="list-group-item list-group-item-action" href="/administrador/painel/servicos">Serviços</a>
            </div>
          </div>

          {/* Tabela */}
          <div className="admTabelaPrincipal col-9 border border-2 rounded-3 mt-5 text-center">
            <div className="row">
              <p className="d-flex col-4 mt-5 fs-3 fw-semibold">
                Todas as marcas
              </p>
              <div className="input-group d-flex mb-5 col-4 w-25 h-25 me-2 mt-5">
                <input type="text" className="form-control" placeholder="Pesquisar marca" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  <img src={pesquisaIcone_adm} alt="" srcSet="" width={20} color="black" />
                </span>
              </div>

              <button type="button" className="btnAdicionarNovoMarcas col-2 rounded-5 mb-3 h-25 ms-2 mt-5 btn btn-sm">Adicionar novo<span className="badge">
                <a href="/administrador/painel/novaMarca"><img src={botaoMais} width={20} height={20} /></a>
              </span>
              </button>
            </div>

            <table className="table table-striped border border-1">
              <thead className="roxo">
                <tr className="admPainelProduto-tabela-cabecalho text-center ">
                  <th scope="col">Marcas</th>
                  <th scope="col">Produtos</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {marcas.map((marca) => (
                  <tr key={marca.id}>
                    <td>{marca.nome}</td>
                    <td>{marca.produtos.nome}</td>
                    <td>
                      <img src={iconeAtualizar_adm} width={25} height={25} />{" "}
                      <img
                        src={iconLixeira_adm}
                        width={25}
                        height={25}
                        onClick={() => deletarMarca(marca.id)}
                      />
                    </td>
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

function trueFalse(status) {
  if (status === true) {
    return "Ativo";
  } else {
    return "Inativo";
  }
}

export default Painel_de_controle_marcas;
