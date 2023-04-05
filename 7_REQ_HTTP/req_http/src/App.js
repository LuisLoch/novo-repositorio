import './App.css';
import { useState, useEffect } from 'react'

//importando hook criado
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  const { data: items, httpConfig, loading, error } = useFetch(url)
  //   useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }
  //   fetchData()
  // }, []);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price
    }
    console.log(product)


    //refatorando POST
    httpConfig(product, 'POST')
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // })

    // //carregamento dinamico
    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    setName("")
    setPrice("")
  }

  const handleDeletion = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleDeletion(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>)
      } 
      <div className="addProduct">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/*state de loading no POST*/}
          {loading && <input type="submit" disabled value="Salvando..." />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
