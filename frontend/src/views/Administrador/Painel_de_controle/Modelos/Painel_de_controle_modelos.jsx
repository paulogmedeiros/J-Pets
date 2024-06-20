import { useEffect, useState } from 'react'
import logoJPets_adm from '../img/logoJPets.png'
import './Painel_de_controle_modelos.css'
import pesquisaIcone_adm from '../img/pesquisa_icone.svg'
import botaoMais from '../img/botao_mais.svg'
import iconeAtualizar_adm from '../img/icone_atualizar.svg'
import iconLixeira_adm from '../img/icone_lixeira.svg'
import { notifications } from '@mantine/notifications'

function Painel_de_controle_modelos() {

    //Estado para armazenar os modelos
    const [modelos, setModelos] = useState([])
    const [pesquisar, setPesquisar] = useState('')
    const [nomeModelo, setNomeModelo] = useState('')
    const [idModelo, setIdModelo] = useState('')

    const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
    const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

    useEffect(() => {
        document.title = "Painel de controle | Modelos"

        // Chamando função carregar modelos
        carregarModelos()
    })
    // Função carregar modelos
    async function carregarModelos() {
        try {
            // Fazer uma chamada da API
            const resposta = await fetch(process.env.REACT_APP_URL_API + '/modelos')
            if (!resposta.ok) {

                // Exibindo erro API
                console.debug("HTTP erro:" + resposta.status)
            }
            else {
                let dados = await resposta.json()
                setModelos(dados)
            }
        } catch (error) {
            console.error("Erro ao buscar modelos" + error)
        }
    }


    async function deletarModelo(modelo_id) {
        if (window.confirm("Tem certeza que deseja deletar esse modelo?")) {
            try {
                const resposta = await fetch(process.env.REACT_APP_URL_API + "/modelos/" + modelo_id, {
                    method: "DELETE",
                });
                if (!resposta.ok) {
                    throw new Error("Falha ao deletar modelo");
                } else {
                    // não obrigatório
                    carregarModelos();
                }
            } catch (error) {
                console.error("Erro ao deletar modelo: ", error);
            }
        }
    }

    async function atualizarModelo(event) {

        event.preventDefault()

        const modeloDados = {
            nome: nomeModelo
        }

        try {
            const resposta = await fetch(process.env.REACT_APP_URL_API + "/modelos/" + idModelo, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(modeloDados)
            });

            const responseData = await resposta.json();

            if (!resposta.ok) {
                notifications.show({ message: responseData.message, color: "white", icon: errorIcon });
                console.error("Erro ao atualizar modelos:", responseData);
                throw new Error('Erro ao atualizar modelos: ' + resposta.statusText);

            } else {
                notifications.show({ message: responseData.message, color: "white", icon: sucessIcon });
                console.log("Resposta do servidor:", responseData);
                setTimeout(() => {
                    window.location.href = "/administrador/painel/modelos";
                }, 1000);

            }
        } catch (error) {
            console.error("Erro ao atualizar modelo:", error);
        }
    }

    return (
        // Container geral para propriedades de fundo
        <div className="admPainel">
            <nav className="admNavbar navbar navbar-expand-lg">
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
                                        P.G.
                                    </button>
                                    <ul className="dropdown-menu ">
                                        <li><a className="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Meu perfil</a></li>
                                        <li><a className="dropdown-item" href="#">Sair</a></li>
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
                        <div className='row '>
                            <p className='d-flex col-4 mt-5  fs-3 fw-semibold'>Todos os modelos</p>

                            <div className="input-group d-flex mb-5 col-4 w-25 h-25 me-2 mt-5">
                                <input
                                    value={pesquisar}
                                    onChange={(e) => setPesquisar(e.target.value)}
                                    type="text"
                                    className="form-control" placeholder="Pesquisar modelo" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button type="button" className="btnPesquisa btn"><img src={pesquisaIcone_adm} width={30} /></button>
                            </div>


                            <button type="button" className="btn btnAdicionarNovoModelo col-2 rounded-5 ms-5 h-25 mt-5 btn btn-sm">
                                Adicionar novo <span className="badge "><a href="http://localhost:3000/administrador/painel/novoModelo"><img src={botaoMais} width={20} height={20} /></a></span>
                            </button>
                        </div>


                        <table className="table table-striped border border-1">
                            <thead className="roxo">
                                <tr className='admPainelProduto-tabela-cabecalho text-center '>
                                    <th scope="col">Modelo</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {modelos.filter((e) => e.nome.includes(pesquisar) || e.nome.toUpperCase().includes(pesquisar) || e.nome.toLowerCase().includes(pesquisar) || pesquisar == '').map(modelo => (
                                    <tr key={modelo.id}>
                                        <td>{modelo.nome}</td>
                                        <td>{modelo.marcas.nome}</td>
                                        <td>
                                            <img
                                                src={iconeAtualizar_adm}
                                                width={25}
                                                height={25}
                                                onClick={() => {
                                                    setNomeModelo(modelo.nome);
                                                    setIdModelo(modelo.id)
                                                }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal" />
                                            <img src={iconLixeira_adm} width={25} height={25} onClick={() => deletarModelo(modelo.id)} />
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
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Atualizar modelo</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-floating mb-3">
                                <input type="text"
                                    value={nomeModelo}
                                    onChange={(e) => setNomeModelo(e.target.value)}
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com" />
                                <label for="floatingInput">Nome do modelo</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" onClick={atualizarModelo} class="btn btn-primary">Salvar alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Painel_de_controle_modelos