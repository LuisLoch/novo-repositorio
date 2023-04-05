import React from 'react'

const UserDetails = ({ nome, idade, profissao }) => {
    return (
        <>
            <h3>Informações pessoais:</h3>
            <ul>
                <li>Nome: {nome}.</li>
                <li>Idade: {idade} anos.</li>
                <li>Profissão: {profissao}.</li>
                {idade < 18 ? (
                    <li>Ainda não pode fazer habilitação.</li>
                ) : (
                    <li>Já pode fazer carteira de habilitação de condutor.</li>
                )}
            </ul>
        </>
    )
}

export default UserDetails