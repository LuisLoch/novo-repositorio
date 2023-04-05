import React from 'react'
import { Link } from 'react-router-dom'

//css
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini<span>Blog</span></h2>
      <p>Este projeto consiste em um blog, usando React para o front-end, e FireBase para o back-end.</p>
      <Link to="/posts/create" className='btn'>Criar post</Link>
    </div>
  )
}

export default About