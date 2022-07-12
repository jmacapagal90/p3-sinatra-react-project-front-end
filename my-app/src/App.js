import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import {Header} from 'semantic-ui-react'
import HomeHeader from './component/HomeHeader'
import HabitatMenu from "./component/HabitatMenu";
import HabitatShow from "./component/HabitatShow";
import {useState,useEffect} from 'react';
//import Animals from './component/Animals'

function App() {
  const [ habitats, setHabitats ] = useState([]);

  useEffect(() => {
      fetch('http://localhost:9292/habitats', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }}
      )
      .then(response => response.json())
      .then(habitat_data => setHabitats(habitat_data))
      .catch((error) => {
      console.error('Error:', error);
      });
    }, [])
  
  return (
    <>
    <Header>
        <HomeHeader />
    </Header>
      <Router>
        <Switch>
          <Route exact path="/">          
            <HabitatMenu habitats={habitats} />
          </Route>
          <Route path="/habitat/:id">
            <HabitatShow habitats={habitats} />
          </Route>
        </Switch>
      </Router>
    </>
      );
}

export default App;
