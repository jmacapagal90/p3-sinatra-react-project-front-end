import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import {Header} from 'semantic-ui-react'
import Home from './component/Home'
import HabitatMenu from "./component/HabitatMenu";
import HabitatDetail from "./component/HabitatDetail";
//import Animals from './component/Animals'

function App() {
  

  return (
    <>
    <Header>
        <Home />
    </Header>
      <Router>
        <Switch>
          <Route exact path="/">          
            <HabitatMenu/>
          </Route>
          <Route path="/habitat">
            <HabitatDetail />
          </Route>
        </Switch>
      </Router>
    </>
      );
}

export default App;
