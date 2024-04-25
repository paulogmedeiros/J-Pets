import React from 'react'

export function Input({name,iconeUsuario,placeholder,textoAlternativo}){
  return(
    <div className='input-wrapper'>
    <img src={iconeUsuario} alt={textoAlternativo} height={48} width={48}/>
    <input type="text" name={name} placeholder={placeholder} />
 </div>
  )
}
