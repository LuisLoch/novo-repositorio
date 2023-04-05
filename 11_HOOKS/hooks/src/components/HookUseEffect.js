import React from 'react'
import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  // useEffect sem dependencias
  useEffect(() => {
    console.log("Estou sendo executado")
  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number+1)
  }

  // array de dependencias vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez!")
  }, [])

  // itens no array de dependencias
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {
    if(anotherNumber>0){
      console.log("Sou executado quando a variável 'anotherNumber' muda de estado")
    }
  }, [anotherNumber])

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Hello world.")
    //   setAnotherNumber(anotherNumber + 1)
    // }, 2000)
    // return () => clearTimeout(timer)

    
  }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>+1</button>
        <p>Another number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber+1)}>Mudar another number</button>
      <hr />
    </div>
  )
}

export default HookUseEffect