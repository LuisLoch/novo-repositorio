import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

//components
import NavBar from './components/NavBar';
import Info from './pages/Info';
import SearchForm from './components/SearchForm';
import { Search } from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BrowserRouter>
        <NavBar />
        {/* busca por produto */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* nested route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* busca */}
          <Route path='/search' element={<Search />} />
          {/* redirect */}
          <Route path='/company' element={<Navigate to="/about"/>} />
          {/* no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
