import {useState} from 'react'

const ManageData = () => {
    let algumaCoisa = 10
    const [number, setNumber] = useState(10);

    return (
        <div>
            <div>
                <p>Valor: {algumaCoisa}</p>
                <button onClick={()=> {algumaCoisa = 15}}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={()=>setNumber(number+5)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData