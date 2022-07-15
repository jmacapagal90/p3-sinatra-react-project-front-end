import React, {useState} from "react";
import HabitatList from "./HabitatList";
import HabitatShow from "./HabitatShow";
import { Route, useRouteMatch } from "react-router-dom";
import { Header, Form, Button, Input, Container } from "semantic-ui-react"

function HabitatPage({ habitats, animals,onHandleNewHabitat,setRefresh }){
    const match = useRouteMatch()
    const [habitatName,setHabitatName] = useState("")
    function submitNewHabitat(e){
        e.preventDefault();
        alert("Thanks for adding a new habitat!")
        const newHabitatObj = {
            name:habitatName,
            }
        fetch('http://localhost:9292/habitats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHabitatObj),
            })
            .then(response => response.json())
            .then(data => 
            onHandleNewHabitat(data)
            )
            .catch((error) => {
            console.error('Error:', error);
            });
        }
    return (
        <Container textAlign="center" >
            <Route path={`${match.url}/:id`}>
                <HabitatShow setRefresh={setRefresh} habitats={habitats} animals = {animals}/>
            </Route>
            <Form onSubmit={(e)=>{submitNewHabitat(e)}} >
            <Form.Field>
                <Header for="habitatname">Habitat Name:</Header>
                <Input placeholder='Habitat Name' onChange={(e)=>setHabitatName(e.target.value)} value={habitatName}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        <HabitatList habitats={habitats} /> 
        </Container>
)}

export default HabitatPage;