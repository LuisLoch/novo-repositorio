import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Luís', 'João', 'Donato'])
    const [users, setUsers] = useState([
        {id: 1, nome: 'Luís', idade: 20},
        {id: 2, nome: 'João', idade: 16},
        {id: 3, nome: 'Donato', idade: 6}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        console.log(randomNumber)
        
        setUsers((prevUsers)=>{
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            {/*Como listar itens usando o useState() -------------------------------------------------------------------------------------------------------------------------------*/}
            {/*Método errado (má prática):*/}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/*Método correto (usando um id próprio definido no objeto)*/}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.nome} - {user.idade}</li>
                ))}
            </ul>

            {/*Como usar o previousState() na edição ou remoção de itens da lista---------------------------------------------------------------------------------------------------*/}
            <button onClick={deleteRandom}>Deletar usuário aleatório</button>
        </div>
    )
}

export default ListRender