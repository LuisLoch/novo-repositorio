import React from 'react'
import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
  // useRef
  const numberRef = useRef(0)
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  useEffect(() => {
    numberRef.current = numberRef.current + 1
  })

  return (
    <div>
      <h2>useRef</h2>
      <p>O componente renderizou: {numberRef.current} vezes.</p>
      <p>Counter: {counter}</p>
      <p>Counter 2: {counter2}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Contador 2</button>
      <hr />
    </div>
  )
}

export default HookUseRef