import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Formulários em react</h1>
      <MyForm user={{nome: "Josias", email: "josias@gmail.com", bio: "Sou um advogado civil", funcao: "admin"}}/>
    </div>
  );
}

export default App;
