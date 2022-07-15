import { Switch, Route,Redirect } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import NavBar from './component/NavBar'
import HabitatPage from "./component/HabitatPage";
import HabitatShow from "./component/HabitatShow";
import Animals from "./component/Animals";
import {useState,useEffect} from 'react';
import Home from './component/Home';
//import Animals from './component/Animals'

function App() {
  const [ habitats, setHabitats ] = useState([]);
  const [ animals, setAnimals ] = useState([]);
  // const { match,path } = useRouteMatch()
  // console.log(match)
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

    useEffect(() => {
      fetch('http://localhost:9292/animals', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }}
      )
      .then(response => response.json())
      .then(animal_data => setAnimals(animal_data))
      .catch((error) => {
      console.error('Error:', error);
      });
    },[])

    function handleNewHabitat(newHabitatObj){
      setHabitats([...habitats,newHabitatObj])
    }

  return (
    <>
      <Header className="App-header" >
        <NavBar/>
      </Header>
        <Switch>
          <Route exact path="/">
              <Home animals={animals}/>
            </Route>
            <Route exact path="/habitats">
                <HabitatPage habitats={habitats} animals={animals} onHandleNewHabitat={handleNewHabitat} /> 
            </Route>
            <Route exact path="/animals">
                <Animals  />
            </Route>
            <Route exact path={`/habitats/:id`}>
                <HabitatShow animals={animals} />
            </Route>
      </Switch>
    </>
      );
  }

export default App;
