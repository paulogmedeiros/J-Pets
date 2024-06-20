import { useEffect, useState } from 'react'
import logoJPets_adm from '../img/logoJPets.png'
import './Painel_de_controle_servicos.css'
import pesquisaIcone_adm from '../img/pesquisa_icone.svg'
import botaoMais from '../img/botao_mais.svg'
import iconeAtualizar_adm from '../img/icone_atualizar.svg'
import iconLixeira_adm from '../img/icone_lixeira.svg'
import { notifications } from '@mantine/notifications'

function Painel_de_controle_servicos() {

    //Estado para armazenar os usuários
    const [servicos, setServicos] = useState([])
    const [pesquisar, setPesquisar] = useState('')
    const [nomeServico, setNomeServico] = useState('')
    const [idServico, setIdServico] = useState('')

    const errorIcon = <i class="fa-solid fa-circle-exclamation" style={{ color: "red", fontSize: "20px" }}></i>
    const sucessIcon = <i class="fa-solid fa-circle-check" style={{ color: "green", fontSize: "20px" }}></i>

    useEffect(() => {

        document.title = "Painel de controle | Serviços"

        // Chamando função carregar servicos
        carregarServicos()

    })

    async function atualizarServico(event) {

        event.preventDefault()

        const servicoDados = {
            nome: nomeServico
        }

        try {
            const resposta = await fetch(process.env.REACT_APP_URL_API + "/servicos/" + idServico, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(servicoDados)
            });

            const responseData = await resposta.json();

            if (!resposta.ok) {
                notifications.show({ message: responseData.message, color: "white", icon: errorIcon });
                console.error("Erro ao cadastrar serviços:", responseData);
                throw new Error('Erro ao cadastrar serviços: ' + resposta.statusText);
            } else {

                notifications.show({ message: responseData.message, color: "white", icon: sucessIcon });
                console.log("Resposta do servidor:", responseData);
                setTimeout(() => {
                    window.location.href = "/administrador/painel/servicos";
                }, 1000);

            }
        } catch (error) {
            console.error("Erro ao cadastrar serviço:", error);
        }
    }

    // Função carregar serviços
    async function carregarServicos() {
        try {
            // Fazer uma chamada da API
            const resposta = await fetch(process.env.REACT_APP_URL_API + '/servicos')
            if (!resposta.ok) {

                // Exibindo erro API
                console.debug("HTTP erro:" + resposta.status)
            }
            else {
                let dados = await resposta.json()
                setServicos(dados)
            }
        } catch (error) {
            console.error("Erro ao buscar usuários" + error)
        }
    }

    async function deletarServico(servicos_id) {
        if (window.confirm("Tem certeza que deseja deletar esse serviço?")) {
            try {
                const resposta = await fetch(process.env.REACT_APP_URL_API + "/servicos/" + servicos_id, {
                    method: "DELETE",
                });
                if (!resposta.ok) {
                    throw new Error("Falha ao deletar serviço");
                } else {
                    // não obrigatório
                    carregarServicos();
                }
            } catch (error) {
                console.error("Erro ao deletar serviço: ", error);
            }
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
                            <p className='d-flex col-4 mt-5  fs-3 fw-semibold'>Todos os serviços</p>

                            <div className="input-group d-flex mb-3 col-4 w-25 h-25 me-2 mt-5">
                                <input type="text"
                                    value={pesquisar}
                                    onChange={(e) => setPesquisar(e.target.value)}
                                    className="form-control"
                                    placeholder="Pesquisar serviço" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button type="button" className="btnPesquisa btn"><img src={pesquisaIcone_adm} width={30} /></button>
                            </div>

                            <button type="button" className="btnAdicionarNovoServico col-2 rounded-5 h-25 ms-5 mt-5 btn btn-sm">
                                Adicionar novo <span className="badge "><a href="http://localhost:3000/administrador/painel/novoServico"><img src={botaoMais} width={20} height={20} /></a></span>
                            </button>
                        </div>


                        <table className="table table-striped border border-1">
                            <thead className="roxo">
                                <tr className='admPainelProduto-tabela-cabecalho text-center '>
                                    <th scope="col">Serviço</th>
                                    <th scope="col">Animal</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {servicos.filter((e) => e.nome.includes(pesquisar) || e.nome.toUpperCase().includes(pesquisar) || e.nome.toLowerCase().includes(pesquisar) || pesquisar == '').map(servico => (
                                    <tr key={servico.id}>
                                        <td>{servico.nome}</td>
                                        <td>{servico.animais.nome}</td>
                                        <td>
                                            <img src={iconeAtualizar_adm}
                                                width={25}
                                                height={25}
                                                className='imgAtualizarAdm'
                                                onClick={() => { setNomeServico(servico.nome); setIdServico(servico.id) }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal" />
                                            <img src={iconLixeira_adm} width={25} height={25} onClick={() => deletarServico(servico.id)} className='imgLixeiraAdm' />
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
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Atualizar serviço</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-floating mb-3">
                                <input type="text"
                                    value={nomeServico}
                                    onChange={(e) => setNomeServico(e.target.value)}
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com" />
                                <label for="floatingInput">Nome do serviço</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" onClick={atualizarServico} class="btn btn-primary">Salvar alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Painel_de_controle_servicos