import {useState, useEffect} from 'react'

//custo hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  //refatorando o post
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  const [loading, setLoading] = useState(false)//variável que identifica o período ao qual a função assíncrona de adicionar dados está rodando

  const [error, setError] = useState(null)

  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if(method === 'POST'){
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })
      setMethod(method)
    }
    if(method === "DELETE"){
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
      })
      setMethod(method)
      setItemId(data)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      //loading
      setLoading(true)

      try{
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
      }catch(error){
        console.log(error.message)
        setError("Houve algum erro ao carregar os dados.")
      }
      

      setLoading(false)
    }
    fetchData()
  }, [url, callFetch])

  useEffect(() => {
    const httpRequest = async () => {
      let json
      if(method === "POST"){
        let fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        setCallFetch(json)
      }
      if(method === "DELETE"){
        const deleteUrl = `${url}/${itemId}`
        const res = await fetch(deleteUrl, config)
        json = await res.json()
      }
      setCallFetch(json)
    }

    httpRequest()
  }, [config, method, url])

  return { data, httpConfig, loading, error }
}