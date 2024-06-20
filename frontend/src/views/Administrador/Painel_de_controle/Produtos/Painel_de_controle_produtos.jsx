import { useEffect, useState } from 'react'
import logoJPets_adm from '../img/logoJPets.png'
import './Painel_de_controle_produtos.css'
import pesquisaIcone_adm from '../img/pesquisa_icone.svg'
import botaoMais from '../img/botao_mais.svg'
import iconeAtualizar_adm from '../img/icone_atualizar.svg'
import iconLixeira_adm from '../img/icone_lixeira.svg'


function Painel_de_controle_produtos() {

    //Estado para armazenar os usuários
    const [produtos, setProdutos] = useState([])
    const [nomeProduto, setNomeProduto] = useState([])
    const [pesquisar, setPesquisar] = useState('')
    const [idProduto, setIdProduto] = useState('')

    useEffect(() => {
        document.title = "Painel de controle | Produtos"

        // Chamando função carregar produtos ao carregar a tela
        carregarProdutos()

    })
    // Função carregar produtos
    async function carregarProdutos() {
        try {
            // Fazer uma chamada da API
            const resposta = await fetch(process.env.REACT_APP_URL_API + '/produtos')
            if (!resposta.ok) {

                // Exibindo erro API
                console.debug("HTTP erro:" + resposta.status)
            }
            else {
                let dados = await resposta.json()
                setProdutos(dados)
            }
        } catch (error) {
            console.error("Erro ao buscar usuários" + error)
        }
    }

    async function deletarProdutos(produto_id) {
        if (window.confirm("Tem certeza que deseja deletar esse produto?")) {
            try {
                const resposta = await fetch(process.env.REACT_APP_URL_API + "/produtos/" + produto_id, {
                    method: "DELETE",
                });
                if (!resposta.ok) {
                    throw new Error("Falha ao deletar produto");
                } else {
                    // não obrigatório
                    carregarProdutos();
                }
            } catch (error) {
                console.error("Erro ao deletar produtos: ", error);
            }
        }
    }

    async function atualizarProduto(event) {

        event.preventDefault()

        const produtoDados = {
            nome: nomeProduto
        }

        try {
            const resposta = await fetch(process.env.REACT_APP_URL_API + "/produtos/" + idProduto, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produtoDados)
            });

            const responseData = await resposta.json();

            if (!resposta.ok) {
                console.error("Erro ao atualizar produto:", responseData);
                window.alert("Erro ao atualizar produto: " + JSON.stringify(responseData));
                throw new Error('Erro ao atualizar produto: ' + resposta.statusText);
            } else {
                console.log("Resposta do servidor:", responseData);

                window.location.href = "/administrador/painel/produtos";
            }
        } catch (error) {
            console.error("Erro ao atualizar serviço:", error);
            window.alert("Erro ao atualizar serviço: " + error.message);
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
                            <p className='d-flex col-4 mt-5 fs-4 fw-semibold'>Todos os produtos</p>

                            <div className="input-group d-flex mb-3 col-4 w-25 h-25 me-2 mt-5">
                                <input
                                    value={pesquisar}
                                    onChange={(e) => setPesquisar(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Pesquisar produto" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button type="button" className="btnPesquisa btn"><img src={pesquisaIcone_adm} width={30} /></button>
                            </div>


                            <button type="button" className="btnAdicionarNovoProduto btn col-2 rounded-5 mb-3 ms-2 text-center mt-5 btn btn-sm">
                                Adicionar novo <span className="badge "><a href="/administrador/painel/novoProduto"><img src={botaoMais} width={20} height={20} /></a></span>
                            </button>
                        </div>


                        <table className="table table-striped border border-1">
                            <thead className="roxo">
                                <tr className='admPainelProduto-tabela-cabecalho text-center '>
                                    <th scope="col">Produto</th>
                                    <th scope="col">Animal</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.filter((e) => e.nome.includes(pesquisar) || e.nome.toUpperCase().includes(pesquisar) || e.nome.toLowerCase().includes(pesquisar) || pesquisar == '').map(produto => (
                                    <tr key={produto.id}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.animais.nome}</td>
                                        <td>
                                            <img src={iconeAtualizar_adm}
                                                width={25}
                                                height={25}
                                                onClick={() => {
                                                    setNomeProduto(produto.nome);
                                                    setIdProduto(produto.id)
                                                }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            />


                                            <img src={iconLixeira_adm} width={25} height={25} onClick={() => deletarProdutos(produto.id)} />
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
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Atualizar produto</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-floating mb-3">
                                <input type="text"
                                    value={nomeProduto}
                                    onChange={(e) => setNomeProduto(e.target.value)}
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com" />
                                <label for="floatingInput">Nome do Produto</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" onClick={atualizarProduto} class="btn btn-primary">Salvar alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Painel_de_controle_produtos