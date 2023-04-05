//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Event from './components/Event';
import MyComponent from './components/MyComponent';
import Challenge from './components/Challenge';

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Event/>
      <Challenge/>
    </div>
  );
}

export default App;
