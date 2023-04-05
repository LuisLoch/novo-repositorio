import { db } from '../firebase/config'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  // cleanup - deal with memory leak
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  function checkIfIsCancelled() {
    if(cancelled)
      return
  }

  // criar usuário
  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(null)

    try {
      const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
      await updateProfile(user, {displayName: data.displayName})

      setLoading(false)

      return user
    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)

      let systemErrorMessage

      if(error.message.includes("Password")){
        systemErrorMessage = "A senha é muito fraca! Deve conter ao menos 6 (seis) caracteres."
      }else if(error.message.includes("email-already")){
        systemErrorMessage = "Email já cadastrado! Por favor, informe um e-mail não utilizado."
      }else{
        systemErrorMessage = "Ocorreu um erro, por favor tente novamente mais tarde."
      }

      setLoading(false)
      setError(systemErrorMessage)
    }
  }

  // login
  const login = async(data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(false)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)
    } catch (error) {
      let systemErrorMessage

      if(error.message.includes("user-not-found")){
        systemErrorMessage = "Usuário não encontrado."
      }else if(error.message.includes("wrong-password")){
        systemErrorMessage = "Senha incorreta."
      }else{
        systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
      }

      setError(systemErrorMessage)
      setLoading(false)
    }
  }

  // logout
  const logout = () => {
    checkIfIsCancelled()

    signOut(auth)
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  }
}