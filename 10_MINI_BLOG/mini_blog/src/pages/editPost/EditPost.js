import React from 'react'
import styles from './EditPost.module.css'

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const EditPost = () => {
  const { id } = useParams()
  const { document: post } = useFetchDocument("posts", id)

  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
      setImageUrl(post.imageUrl)

      const textTags = post.tagsArray.join(", ")

      setTags(textTags)
    }
  }, [post])

  const { user } = useAuthValue()
  const { updateDocument, response } = useUpdateDocument("posts")

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
    if (!title || !imageUrl || !tags || !body)
      setFormError("Por favor, preencha todos os campos.")

    if (formError) return

    const data = {
      title,
      imageUrl,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }

    updateDocument(id, data)

    // redirect to homepage
    navigate("/dashboard")
  }

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editar post: {post.title}</h2>
          <p>Alterar os dados do post selecionado</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input type="text" name='title' required placeholder='Pense em um bom título...' onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>
            <label>
              <span>URL da imagem:</span>
              <input type="link" name='imageUrl' required placeholder='URL da imagem' onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
            </label>
            <p className={styles.preview_title}>Preview da imagem:</p>
            <img className={styles.image_preview} src={post.imageUrl} alt={post.title} />
            <label>
              <span>Descrição:</span>
              <textarea name="body" required placeholder='Discorra sobre o assunto do post' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input type="text" name='tags' required placeholder='Insira as tags separadas por vírgulas' onChange={(e) => setTags(e.target.value)} value={tags} />
            </label>
            {!response.loading && <button className='btn'>Editar</button>}
            {response.loading && <button className='btn' disabled>Aguarde...</button>}
            {response.error && <p className='error'>{response.error}</p>}
            {formError && <p className='error'>{formError}</p>}
          </form>
        </>
      )}
    </div>
  )
}

export default EditPost