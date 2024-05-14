import React from 'react'
// import './Quem_e_voce.css'
import imagemEmpresa from './img/imagem_empresa.svg'
import imagemDonoPet from './img/imagem_dono_de_pet.svg'
function Quem_e_voce() {
  return (
    <div className='container'>
        <div className='titulo'>
            <h1>Quem é você?</h1>
        </div>
        <div className='imagem'>
            <div className='imagem-dono-pet'>
                <img src={imagemDonoPet} alt="imagem para donos de pet" height={450} width={519}/>
                <button><b>Dono de pet</b></button>
            </div>
            <div className='imagem-empresa'>
                <img src={imagemEmpresa} alt="imagem para empresas"height={450} width={519} />
                <button><b>Empresa</b></button>
            </div>
        </div>
    </div>
  )
}

export default Quem_e_voce