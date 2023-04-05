import React from 'react'
import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const { user } = useAuthValue()
  const { insertDocument, response } = useInsertDocument("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    // validate image URL
    try {
      new URL(imageUrl)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL válida.")
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    // check all the values
    if(!title || !imageUrl || !tags || !body)
      setFormError("Por favor, preencha todos os campos.")

    if(formError) return 

    insertDocument({
      title,
      imageUrl,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    // redirect to homepage
    navigate("/")
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Poste sobre o que você pensa, e compartilhe seu conhecimento</p>
      <form onSubmit={handleSubmit}>
      <label>
          <span>Título:</span>
          <input type="text" name='title' required placeholder='Pense em um bom título...' onChange={(e) => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input type="link" name='imageUrl' required placeholder='URL da imagem' onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea name="body" required placeholder='Discorra sobre o assunto do post' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input type="text" name='tags' required placeholder='Insira as tags separadas por vírgulas' onChange={(e) => setTags(e.target.value)} value={tags} />
        </label>
        {!response.loading && <button className='btn'>Criar</button>}
        {response.loading && <button className='btn' disabled>Aguarde...</button>}  
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}

export default CreatePost