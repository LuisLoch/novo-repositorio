import React from 'react'
import './MyComponent.css'

const MyComponent = () => {
  return (
    <div>
      <h1>CSS de componente</h1>
      <p>Este é o parágrafo do componente</p>
      <p className='myComponentParagraph'>Este parágrafo é do componente e possui classe</p>
    </div>
  )
}

export default MyComponent