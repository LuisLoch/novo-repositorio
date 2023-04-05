import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Pagina from './pages/Pagina'

//components
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>Context API - Só funciona se encapsular o aplicativo dentro do contexto no arquivo "index.js"</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='pagina' element={<Pagina />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
