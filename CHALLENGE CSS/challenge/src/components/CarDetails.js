import React from 'react'
import './CarDetails.css'

const CarDetails = ({ nome, marca, ano, km }) => {
  return (
    <div>
      <h2 className='titulo_lista' >Detalhes do carro:</h2>
      <ul className='lista_carros' >
        <li className='itemLista'>Nome do carro: {nome}</li>
        <li className='itemLista'>Marca: {marca}</li>
        <li className='itemLista'>Ano: {ano}</li>
        <li className='itemLista'>Quilometragem: {km}</li>
      </ul>
    </div>
  )
}

export default CarDetails