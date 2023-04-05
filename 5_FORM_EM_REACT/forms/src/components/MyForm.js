//import React from 'react'
import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
  // Gerenciamento de dados
  const [nome, setNome] = useState((user && user.nome) || "") //controle de inputs
  const [email, setEmail] = useState(user ? user.email : "") //controle de inputs
  const [bio, setBio] = useState(user ? user.bio : "")
  const [funcao, setFuncao] = useState(user ? user.funcao : "")

  const handleName = (e) => {
    setNome(e.target.value)
  }

  // configurando envio de form
  const handleSubmit = (e) => {
    e.preventDefault()//previne de que o site seja recarregado ao enviar o formulario
    console.log("Enviando dados... ")
    console.log(nome, email, bio, funcao)

    // limpar formulario apos envio
    setNome("")
    setEmail("")
    setBio("")
    setFuncao("")
  }

  // console.log(nome)
  // console.log(email)

  return (
    <div>
      {/* Criação de formulários */}
      {/* 2 tipos de criação de formulários e dois modos de pegar os dados (inline ou com função pre-made) */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" value={nome} onChange={handleName} />
        </div>

        {/* Label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>

        {/* textarea */}
        <label>
          <span>Bio</span>
          <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>

        {/* select input */}
        <label>
          <span>Função no sistema</span>
          <select name="funcao" value={funcao} onChange={(e) => {setFuncao(e.target.value)}}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="socio">Sócio</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm