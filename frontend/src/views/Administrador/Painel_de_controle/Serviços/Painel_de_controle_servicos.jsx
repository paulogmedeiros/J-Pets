import { useEffect, useState } from 'react'
import logoJPets_adm from '../img/logoJPets.png'
import './Painel_de_controle_servicos.css'
import pesquisaIcone_adm from '../img/pesquisa_icone.svg'
import botaoMais from '../img/botao_mais.svg'

function Painel_de_controle_servicos() {

    //Estado para armazenar os usuários
    const [servicos, setServicos] = useState([])

    useEffect(() => {

        // Função carregar usuários
        async function carregarServicos() {
            try {
                // Fazer uma chamada da API
                const resposta = await fetch('/servicos')
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

        // Chamando função carregar usuários
        carregarServicos()
    })
    return (
        // Container geral para propriedades de fundo
        <div class="admPainel">
            <nav class="admNavbar navbar navbar-expand-lg">
                <div class="container-fluid d-flex">
                    <a class="navbar-brand" href="#"><img src={logoJPets_adm} alt="" srcset="" width={50} height={50} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end pe-5 me-5" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <div class="dropdown">
                                    <button class="admInfo btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        P.G.
                                    </button>
                                    <ul class="dropdown-menu ">
                                        <li><a class="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Meu perfil</a></li>
                                        <li><a class="dropdown-item" href="#">Sair</a></li>
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
                            <a class="list-group-item list-group-item-action" href="/administrador/painel">Empresas</a>
                            <a class="list-group-item list-group-item-action" href="/administrador/painel/produtos">Produtos</a>
                            <a class="list-group-item list-group-item-action" href="/administrador/painel/servicos">Serviços</a>
                        </div>
                    </div>

                    {/* Tabela */}
                    <div class="admTabelaPrincipal col-9 border border-2 rounded-3 mt-5 text-center">
                        <div className='row '>
                            <p className='d-flex col-4 mt-5  fs-2 fw-semibold'>Todos os serviços</p>
                            <div class="input-group d-flex mb-3 col-4 w-25 me-2 mt-5">
                                <input type="text" class="form-control" placeholder="Pesquisar serviço" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2"><img src={pesquisaIcone_adm} alt="" srcset="" width={20} color='back' /></span>
                            </div>


                            <button type="button" class="btnAdicionarNovo col-4 w-25 h-25 mt-5 btn btn-sm "><img src={botaoMais} width={30} height={30} /></button>
                        </div>


                        <table class="table table-striped border border-1">
                            <thead>
                                <tr className='admPainelProduto-tabela-cabecalho text-center '>
                                    <th scope="col">Serviço</th>
                                    <th scope="col">Animal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {servicos.map(servico => (
                                    <tr key={servico.id}>
                                        <td>{servico.nome}</td>
                                        <td>{servico.animais.nome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

function trueFalse(status) {
    if (status === true) {
        return "Ativo"
    } else {
        return "Inativo"
    }

}

export default Painel_de_controle_servicos