import React from 'react'
import './Quem_e_voce.css'
import imagemEmpresa from './img/imagem_empresa.svg'
import imagemDonoPet from './img/imagem_dono_de_pet.svg'
function Quem_e_voce() {
    return (
        <div className="container">

            <div className="row justify-content-center col-12 ps-4 col-md-12 position-absolute top-50 start-50 translate-middle">

                <div className="col-md-12 d-flex-md-12">

                    <p className="confirmacaoUsuarioTitulo fs-1 fw-bold text-center mb-2 mt-5 mb-md-5">Quem é você?</p>

                    <div className="container text-center">

                        <div className="row col-12">
                            <div className="col-md-6 d-flex">

                                <button type="button" className="btnConfirmacaoDonoDePet btn border border-3 rounded-5 border-primary">
                                    <p className="text-md-center fw-bold fs-4">Dono de pet</p>
                                    <img src={imagemDonoPet} className='img-fluid' width={410} />
                                </button>
                            </div>

                            <div className="col-md-6 d-flex mt-3 mt-md-0">
                                <button type="button" className="btnConfirmacaoEmpresa btn border border-3 rounded-5 border-warning">
                                    <p className="text-md-center fw-bold fs-4">Empresa</p>
                                    <img src={imagemEmpresa} className='img-fluid' width={355} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quem_e_voce