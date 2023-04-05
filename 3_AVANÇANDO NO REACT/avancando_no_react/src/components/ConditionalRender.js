import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)
    const [name, setName] = useState('João')

    return (
        <div>
            <h2>Isso será exibido?</h2>
            {x && <p>Se X for true, sim.</p>}
            <h3>Render ternário:</h3>
            {name === "João" ? (
                <div>
                    <p>O nome é João.</p>
                </div>
            ) : (
                <div>
                    <p>O nome não é João.</p>
                </div>
            )}
            <button onClick={() => setName("Outro nome")}>Clique para mudar o nome</button>
        </div >
    )
}

export default ConditionalRender