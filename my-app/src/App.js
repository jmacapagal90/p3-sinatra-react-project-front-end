import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Title from './component/Title'
import NavBar from "./component/NavBar";
import HabitatPage from "./component/HabitatPage";
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
      <Title />
      <NavBar habitats={habitats} />
      <Router>
        <Switch>
          <Route path="/habitat/:id">
            <HabitatPage habitats={habitats} />
          </Route>
        </Switch>
      </Router>
    </>
      );
}

export default App;
