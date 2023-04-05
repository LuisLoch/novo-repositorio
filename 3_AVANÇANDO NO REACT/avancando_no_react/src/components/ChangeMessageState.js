import React from 'react'

const ChangeMessageState = ({ handleMessage }) => {
    const messages = ['Oi', 'Olá', 'Bom dia']

    return (
        <>
            <button onClick={() => handleMessage(messages[0])}>Cliqui aqui para "Oi"</button>
            <button onClick={() => handleMessage(messages[1])}>Cliqui aqui para "Olá"</button>
            <button onClick={() => handleMessage(messages[2])}>Cliqui aqui para "Bom dia"</button>
        </>
    )
}

export default ChangeMessageState