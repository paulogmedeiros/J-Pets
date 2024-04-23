import React from 'react'
import './Cadastro_usuario.css'
import cachorro from './img/imagem_cadastro.png'
function Cadastro_usuario() {
  return (
    <div className='container'>
      <div className='imagem'>
        <img src={cachorro} alt="foto fofa de cachorro" height={600} width={600}/>
      </div>
      <div className='formulario'>
        <h1><b>Boas Vindas!</b></h1>
      </div>
    </div>
  )
}

export default Cadastro_usuario