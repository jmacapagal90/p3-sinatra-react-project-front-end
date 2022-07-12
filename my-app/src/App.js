import { Switch, BrowserRouter as Router } from "react-router-dom";
import {Header} from 'semantic-ui-react'
import Home from './component/Home'
//import Animals from './component/Animals'

function App() {
  

  return (
    <Header>
      <Router>
        <Switch>
          <Home/>
        </Switch>
      </Router>
    </Header>
      );
}

export default App;
