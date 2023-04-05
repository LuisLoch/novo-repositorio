import React from 'react'

const FuncaoComponentePai = ({ funcao }) => {
    return (
        <>
            <button onClick={funcao}>Clique aqui para ativar uma função recebida por componente pai</button>
        </>
    )
}

export default FuncaoComponentePai