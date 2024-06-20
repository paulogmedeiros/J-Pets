import { useEffect, useState } from "react";
import logoJPets_adm from "../img/logoJPets.png";
import "./Painel_de_controle_marcas.css";
import pesquisaIcone_adm from "../img/pesquisa_icone.svg";
import botaoMais from "../img/botao_mais.svg";
import iconeAtualizar_adm from "../img/icone_atualizar.svg";
import iconLixeira_adm from "../img/icone_lixeira.svg";
import { notifications } from '@mantine/notifications'

function Painel_de_controle_marcas() {

  //Estado para armazenar os usuários
  const [marcas, setMarcas] = useState([]);
  const [pesquisar, setPesquisar] = useState('')
  const [nomeMarca, setNomeMarca] = useState('')
  const [idMarca, setIdMarca] = useState('')

  const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
  const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

  useEffect(() => {

    document.title = "Painel de controle | Marcas"

    // Chamando função carregar usuários
    carregarMarcas();
  });

  // Função carregar usuários
  async function carregarMarcas() {
    try {
      // Fazer uma chamada da API
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/marcas");
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
        const resposta = await fetch(process.env.REACT_APP_URL_API + "/marcas/" + marca_id, {
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

  async function atualizarMarca(event) {

    event.preventDefault()

    const marcaDados = {
      nome: nomeMarca
    }

    try {
      const resposta = await fetch(process.env.REACT_APP_URL_API + "/marcas/" + idMarca, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(marcaDados)
      });

      const responseData = await resposta.json();

      if (!resposta.ok) {
        console.error("Erro ao atualizar modelos:", responseData);
        notifications.show({ message: responseData.message, color: "white", icon: errorIcon });
        throw new Error('Erro ao atualizar modelos: ' + resposta.statusText);

      } else {
        notifications.show({ message: responseData.message, color: "white", icon: sucessIcon });
        console.log("Resposta do servidor:", responseData);

        setTimeout(() => {
          window.location.href = "/administrador/painel/marcas";
        }, 1000);

      }
    } catch (error) {
      console.error("Erro ao atualizar serviço:", error);
    }
  }

  async function logOff() {
    localStorage.clear()
    window.location.href = "/"
  }
  return (
    // Container geral para propriedades de fundo
    <div className="admPainel">
      <nav className="admNavbar navbar navbar-expand-md">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="/administrador/painel"><img src={logoJPets_adm} alt="" srcSet="" width={50} height={50} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button className="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ADM
                  </button>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item disabled" href="#">ADM</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/administrador/perfil">Meu perfil</a></li>
                    <li><button className="dropdown-item" onClick={logOff}>Sair</button></li>
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
                <input
                  value={pesquisar}
                  onChange={(e) => setPesquisar(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Pesquisar marca"
                  aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button type="button" className="btnPesquisa btn"><img src={pesquisaIcone_adm} width={30} /></button>
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
                {marcas.filter((e) => e.nome.includes(pesquisar) || e.nome.toUpperCase().includes(pesquisar) || e.nome.toLowerCase().includes(pesquisar) || pesquisar == '').map((marca) => (
                  <tr key={marca.id}>
                    <td>{marca.nome}</td>
                    <td>{marca.produtos.nome}</td>
                    <td>
                      <img
                        onClick={() => {
                          setNomeMarca(marca.nome);
                          setIdMarca(marca.id)
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        src={iconeAtualizar_adm}
                        width={25}
                        height={25} />

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
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Atualizar marca</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input type="text"
                  value={nomeMarca}
                  onChange={(e) => setNomeMarca(e.target.value)}
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com" />
                <label for="floatingInput">Nome da marca</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" onClick={atualizarMarca} class="btn btn-primary">Salvar alterações</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Painel_de_controle_marcas;
