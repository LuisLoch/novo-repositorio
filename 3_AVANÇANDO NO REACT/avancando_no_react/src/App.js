import './App.css';
import Cidade from './assets/city.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarSpecs from './components/CarSpecs';
import Fragment from './components/Fragment';
import Container from './components/Container';
import FuncaoComponentePai from './components/FuncaoComponentePai';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Jubileu"
  const [userName] = useState("Abigail")
  const carros = [
    { id: 1, nome: "Ferrari", cor: "Amarela", km: 0, novo: true },
    { id: 2, nome: "Hyundai", cor: "Branco", km: 65000, novo: false },
    { id: 3, nome: "Chevrolet", cor: "Azul escuro", km: 140000, novo: false },
    { id: 4, nome: "Toyota", cor: "Preto", km: 0, novo: true },
    { id: 5, nome: "Ford", cor: "Prata", km: 1640000, novo: false }
  ]
  const showMessage = () => {
    console.log("Evento por meio de componente pai acontecendo")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const pessoas = [
    { id: 1, nome: 'Luís', idade: 20, profissao: 'Engenheiro de software' },
    { id: 2, nome: 'João', idade: 27, profissao: 'Gerente de banco' },
    { id: 3, nome: 'Felipe', idade: 74, profissao: 'Aposentado' },
    { id: 4, nome: 'André', idade: 17, profissao: 'Auxiliar administrativo' }
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>


      {/*Imagem em public---------------------------------------------------------------------------------------------------------------------*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem da pasta src/assets*/}
      <div>
        <img src={Cidade} alt="Cidade" />
      </div>


      {/* manipulação de dados com useState--------------------------------------------------------------------------------------------------- */}
      <ManageData />


      {/* manipulação de lista---------------------------------------------------------------------------------------------------------------- */}
      <ListRender />


      {/* render condicional------------------------------------------------------------------------------------------------------------------ */}
      <ConditionalRender />


      {/*props---------------------------------------------------------------------------------------------------------------------------------*/}
      <ShowUserName name="Luís" />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      <hr />


      {/* destructuring das props------------------------------------------------------------------------------------------------------------- */}
      <CarSpecs marca="Volkswagen" km={140000.00} cor="Azul" novo={false} />


      {/* reaproveitando dados --------------------------------------------------------------------------------------------------------------- */}
      <CarSpecs marca="Ford" km={90000.00} cor="Vermelho" novo={false} />
      <CarSpecs marca="Fiat" km={0} cor="Branco" novo={true} />
      <CarSpecs marca="Peugeot" km={110000.00} cor="Prata" novo={false} />


      {/* loop em array de objetos ------------------------------------------------------------------------------------------------------------*/}
      <hr />
      {carros.map((carro) => (
        <CarSpecs key={carro.id} marca={carro.marca} cor={carro.cor} km={carro.km} novo={carro.novo} />
      ))}


      {/* trabalhando com fragments----------------------------------------------------------------------------------------------------------- */}
      <hr />
      <Fragment propFragment="Teste de propriedades em fragments" />


      {/* Children props (PARA QUE O CONTEÚDO DENTRO DE <Container> seja exibido no site, é necessário que o parametro tenha nome de children) */}
      <Container valor={2}>
        <p>Este é o conteúdo dele</p>
        <p>Este também é conteúdo dele</p>
      </Container>
      <Container>
        <h5>Testando container</h5>
      </Container>

      {/* Funções dentro das props------------------------------------------------------------------------------------------------------------ */}
      <FuncaoComponentePai funcao={showMessage} />

      {/* Uso de state lift, modo de fazer com que um componente filho use um useState (ou outro hook) vindo de um componente pai------------- */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>
      ))}
    </div>
  );
}

export default App;
