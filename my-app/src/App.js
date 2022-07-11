import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import Animals from './component/Animals'
import Habitats from './component/Habitats'

function App() {
  

  return (
      <Header className="App-header">
        <Animals />
        <Habitats />
      </Header>
  );
}

export default App;
