import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
  // usestate
  let username = 'João'
  const [name, setName] = useState("Luís")

  const changeNames = () => {
    username = 'João Marcos'
    setName("Luís Henrique")

    console.log(name, username)
  }

  // useState e inputs
  const [age, setAge] = useState(18)

  const handleSubmit = (e) => {
    e.preventDefault()

    // enviar os dados para a API
    console.log(age)
  }


  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
        <p>Variável: {username}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>

      {/* useState e inputs */}
      <p>Digite sua idade:</p>
      <form onSubmit={handleSubmit} >
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos.</p>
      <hr />
    </div>
  )
}

export default HookUseState