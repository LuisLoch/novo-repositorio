// import { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter'
// import { CounterContext } from '../context/CounterContext'

//refatorando o uso de contexto com hooks
import { useCounterContext } from '../hooks/useCounterContexs'

//context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'





const Home = () => {
//  const { counter } = useContext(CounterContext)
const {counter} = useCounterContext()

//contexto mais complexo
const { color, dispatch } = useTitleColorContext()

//alterando state complexo
const setTitleColor = (color) => {
  dispatch({ type: color })
}

  return (
    <div>
      <h2 style={{color: color}}>Página Home</h2>
      <h2>Valor do contador: {counter}</h2>
      <ChangeCounter/>
      <div>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>

  )
}

export default Home