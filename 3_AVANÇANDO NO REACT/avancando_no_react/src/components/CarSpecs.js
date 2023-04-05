import React from 'react'

const CarSpecs = ({ marca, km, cor, novo }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Quilometragem: {km}</li>
        <li>Cor do carro: {cor}</li>
        {novo && <li>ESTE CARRO É NOVO!</li>}
      </ul>
    </div>
  )
}

export default CarSpecs