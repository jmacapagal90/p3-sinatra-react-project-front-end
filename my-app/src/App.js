import { Switch, BrowserRouter as Router } from "react-router-dom";
import {Header} from 'semantic-ui-react'
import Habitats from './component/Habitats'
//import Animals from './component/Animals'

function App() {
  

  return (
    <Header>
      <Router>
        <Switch>
          <Habitats/>
        </Switch>
      </Router>
    </Header>
      );
}

export default App;
