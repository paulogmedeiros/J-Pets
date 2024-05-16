import { useEffect, useState } from "react";
import logoJPets_adm from "../img/logoJPets.png";
import estilos from "./Painel_de_controle_marcas.css";
import pesquisaIcone_adm from "../img/pesquisa_icone.svg";
import botaoMais from "../img/botao_mais.svg";
import iconeAtualizar_adm from "../img/icone_atualizar.svg";
import iconLixeira_adm from "../img/icone_lixeira.svg";

function Painel_de_controle_marcas() {
  //Estado para armazenar os usuários
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    // Chamando função carregar usuários
    carregarMarcas();
  });
  // Função carregar usuários
  async function carregarMarcas() {
    try {
      // Fazer uma chamada da API
      const resposta = await fetch("/marcas");
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
        const resposta = await fetch("/marcas/" + marca_id, {
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
    <div class="admPainel">
      <nav class="admNavbar navbar navbar-expand-lg">
        <div class="container-fluid d-flex">
          <a class="navbar-brand" href="#">
            <img src={logoJPets_adm} alt="" srcset="" width={50} height={50} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end pe-5 me-5"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <div class="dropdown">
                  <button
                    class="admInfo btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    P.G.
                  </button>
                  <ul class="dropdown-menu ">
                    <li>
                      <a class="dropdown-item disabled" href="#">
                        Paulo Gabriel
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Meu perfil
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Sair
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal  */}
      <div class="container mt-5">
        <div class="row">
          {/* Menu lateral */}

          <div class="admMenuLateral col-3 mt-5 pr-5">
            <div id="list-example" class="list-group">
              <a
                class="list-group-item list-group-item-action"
                href="/administrador/painel"
              >
                Empresas
              </a>
              <a class="list-group-item list-group-item-action" href="">
                Cadastrar admin
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="/administrador/painel/produtos"
              >
                Produtos
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="/administrador/painel/marcas"
              >
                Marcas
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="/administrador/painel/modelos"
              >
                Modelos
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="/administrador/painel/servicos"
              >
                Serviços
              </a>
            </div>
          </div>

          {/* Tabela */}
          <div class="admTabelaPrincipal col-9 border border-2 rounded-3 mt-5 text-center">
            <div className="row ">
              <p className="d-flex col-4 mt-5  fs-2 fw-semibold">
                Todas as marcas
              </p>
              <div class="input-group d-flex mb-3 col-4 w-25 me-2 mt-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pesquisar marca"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <img
                    src={pesquisaIcone_adm}
                    alt=""
                    srcset=""
                    width={20}
                    color="black"
                  />
                </span>
              </div>

              <button
                type="button"
                class="btn btnAdicionarNovo col-4 w-25 h-25 mt-5 btn btn-sm"
              >
                Adicionar novo{" "}
                <span class="badge ">
                  <img src={botaoMais} width={20} height={20} />
                </span>
              </button>
            </div>

            <table class="table table-striped border border-1">
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
