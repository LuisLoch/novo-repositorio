import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const About = () => {
  const { counter } = useContext(CounterContext)

  //contexto mais complexo
const { color } = useTitleColorContext()

  return (
    <div>
      <h2 style={{color: color}}>Página about</h2>
      <h2>Valor do contador: {counter}</h2>
    </div>
  )
}

export default About