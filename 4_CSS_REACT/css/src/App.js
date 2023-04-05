import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Luís");
  const redTitle = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React CSS</h1>

      {/* CSS de componente */}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>

      {/* inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Esse elemento foi estilizado de forma "inline"</p>
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Esse elemento foi estilizado de forma "inline"</p>
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Esse elemento foi estilizado de forma "inline"</p>

      {/* CSS inline dinâmico */}
      <h2 style={n<10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS inline dinâmico</h2>
      <h2 style={n>10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS inline dinâmico</h2>
      <h2 style={name==="Luís" ? ({ color: "green", backgroundColor: "grey" }) : null}>CSS inline dinâmico</h2>
      <h2 style={name!=="Luís" ? ({ color: "green", backgroundColor: "grey" }) : null}>CSS inline dinâmico</h2>

      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título tem classe dinâmica</h2>
      <h2 className={!redTitle ? "red-title" : "title"}>Este título tem classe dinâmica</h2>

      {/* CSS com modules (Só funciona se for em um componente que possui o css importado, como este abaixo)*/}
      <Title/>
    </div>
  );
}

export default App;
