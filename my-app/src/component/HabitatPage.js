import React, {useState} from "react";
import HabitatList from "./HabitatList";
import HabitatShow from "./HabitatShow";
import { Route, useRouteMatch } from "react-router-dom";
import { Form, Button, Input, Label,Container } from "semantic-ui-react"

<<<<<<< HEAD
function HabitatPage({ habitats, animals }){
=======
function HabitatPage({ habitats,onHandleNewHabitat }){
    const [habitatName,setHabitatName] = useState("")
>>>>>>> james-habitat-form
    const match = useRouteMatch()
    
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
        <Container>
            <HabitatList habitats={habitats} /> 
            <Route path={`${match.url}/:id`}>
                <HabitatShow habitats={habitats} animals = {animals}/>
            </Route>
            <Form onSubmit={(e)=>{submitNewHabitat(e)}} >
            <Form.Field>
                <Label for="habitatname">Habitat Name:</Label>
                <Input placeholder='Habitat Name' onChange={(e)=>setHabitatName(e.target.value)} value={habitatName}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        </Container>
)}

export default HabitatPage;