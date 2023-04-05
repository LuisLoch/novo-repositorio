import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const carros = [
    { id: 1, nome: "Civic", marca: "Honda", ano: 2015, km: 32000 },
    { id: 2, nome: "F1000", marca: "Ford", ano: 1998, km: 194000 },
    { id: 3, nome: "Focus", marca: "Ford", ano: 2019, km: 26000 },
    { id: 4, nome: "Biz", marca: "Honda", ano: 2006, km: 109000 },
    { id: 5, nome: "Fiorino", marca: "Fiat", ano: 2010, km: 140000 }
  ]

  return (
    <div className="App">
      <h1>Desafio CSS</h1>

      {carros.map((carro) => (
        <CarDetails key={carro.id} nome={carro.nome} marca={carro.marca} ano={carro.ano} km={carro.km}/>
      ))}
    </div>
  );
}

export default App;
