import React from 'react'
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
                <img src={imagemDonoPet} alt="imagem para donos de pet" />
                <button>Dono de pet</button>
            </div>
            <div className='imagem-empresa'>
                <img src={imagemEmpresa} alt="imagem para empresas" />
                <button>Empresa</button>
            </div>
        </div>
    </div>
  )
}

export default Quem_e_voce