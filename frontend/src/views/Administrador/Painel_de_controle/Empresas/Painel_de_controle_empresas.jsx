import { useEffect, useState } from 'react'
import logoJPets_adm from '../img/logoJPets.png'
import './Painel_de_controle_empresas.css'
import pesquisaIcone_adm from '../img/pesquisa_icone.svg'

function Painel_de_controle_empresas() {

    //Estado para armazenar os usuários
    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
            document.title = "Painel de controle | Empresas"
        // Função carregar usuários
        async function carregarUsuarios() {
            try {
                // Fazer uma chamada da API
                const resposta = await fetch(process.env.REACT_APP_URL_API +'/empresas')
                if (!resposta.ok) {

                    // Exibindo erro API
                    console.debug("HTTP erro:" + resposta.status)
                }
                else {
                    let dados = await resposta.json()
                    console.debug(resposta)
                    setEmpresas(dados)
                }
            } catch (error) {
                console.error("Erro ao buscar usuários" + error)
            }
        }

        // Chamando função carregar usuários
        carregarUsuarios()
    })

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
                                        P.G.
                                    </button>
                                    <ul className="dropdown-menu ">
                                        <li><a className="dropdown-item disabled" href="#">Paulo Gabriel</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/administrador/perfil">Meu perfil</a></li>
                                        <li><a className="dropdown-item" href="#">Sair</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Conteúdo principal  */}
            <div className="container-md mt-5">
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
                            <p className='d-flex col-4 mt-5 me-5 fs-5 fw-semibold'>Todas as empresas</p>

                            <div className="input-group d-flex mb-3 col-4 w-50 me-3 mt-5">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Pesquisar empresa" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button type="button" className="btnPesquisa btn"><img src={pesquisaIcone_adm} width={30}/></button>
                                </div>
                            </div>
                        </div>


                        <table className="table table-striped border border-1">
                            <thead className="roxo">
                                <tr className='text-center'>
                                    <th scope="col">Empresa</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empresas.map(empresa => (
                                    <tr key={empresa.id}>
                                        <td>{empresa.nome_fantasia}</td>
                                        <td>{trueFalse(empresa.status_pagamento)}</td>
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

export default Painel_de_controle_empresas