import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import {Header} from 'semantic-ui-react'
import HomeHeader from './component/HomeHeader'
import HabitatMenu from "./component/HabitatMenu";
import HabitatDetail from "./component/HabitatLink";
import {useState,useEffect} from 'react';
//import Animals from './component/Animals'

function App() {
  const [ habitat, setHabitats ] = useState([]);
  const [ habitatID, setHabitatID] = useState(0);

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
  
  function handleHabitatID(id){
    setHabitatID(id)
  }
  
  return (
    <>
    <Header>
        <HomeHeader />
    </Header>
      <Router>
        <Switch>
          <Route exact path="/">          
            <HabitatMenu habitat={habitat} handleHabitatID={handleHabitatID}/>
          </Route>
          <Route path="/habitat">
            {/* <HabitatDetail habitat={habitat}/> */}
          </Route>
        </Switch>
      </Router>
    </>
      );
}

export default App;
