import React from 'react'

const Container = ({ children, valor }) => { //O PARAMETRO PRECISA SER DE NOME "children" PARA FUNCIONAR A IMPRESSÃO DO CONTEÚDO QUE ESTÁ EM "APP.JS"
    return (
        <div>
            <h2>Este é o título do container</h2>
            {children}
            {valor && <p>O valor é: {valor}</p>}
        </div>
    )
}

export default Container