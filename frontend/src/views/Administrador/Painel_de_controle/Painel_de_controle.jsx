import React from 'react'
import logoJPets_adm from './img/logoJPets.png'
import './Painel_de_controle.css'
import pesquisaIcone_adm from './img/pesquisa_icone.svg'
function Painel_de_controle() {
    return (
        <div className="admPainel">
            <header className='admPainelHeader'>
                <nav className='admPainelNav'>
                    <img src={logoJPets_adm} alt="" height={70} width={70} />

                    <div className="admInfo">
                        <button className="admDropBtn">P.G.</button>
                        <div className="admListaConteudo">
                            <p>Paulo Gabriel</p>
                            <a href="">Meu perfil</a>
                            <a href="" className='admExit'>Sair</a>
                        </div>
                    </div>

                </nav>
            </header>
            <div className="admBarraLateral">
                <ul className='admBarraLateralConteudo'>
                    <li><button id='adm-btn-painel'><a href=""></a>Painel de controle</button></li>
                    <li><button id='adm-btn-servicos'><a href=""></a>Serviços</button></li>
                    <li><button id='adm-btn-produtos'><a href=""></a>Produtos</button></li>
                </ul>
            </div>

            <div className="admTabelaEmpresa">
                <div className="admTabelaHeader">
                    <h3 className='admPainelEmpresaTitulo'>Todas as empresas</h3>
                    <div className="admTabelaPesquisa">
                        <input type="text" className='admBarraDePesquisa' placeholder='Procurar empresa...' />
                        <button>
                            <img src={pesquisaIcone_adm} width={30} height={30} />
                        </button>
                    </div>

                </div>
                <div className="admTabelaPrincipalEmpresa">
                    <table id="admEmpresaTabela">
                        <thead>
                            <tr>
                                <th>Empresa</th>
                                <th>Status</th>
                                <th>Média de avaliações</th>
                            </tr>
                        </thead>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default Painel_de_controle