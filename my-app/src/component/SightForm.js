import React from "react";
import { useState } from "react";
import { Form, Button, Input, Label, Container } from "semantic-ui-react";

function SightForm( {habitat, animals} ) {
    const [ animalName, setAnimalName] = useState('')



    function handleSubmitSight(e) {
        e.preventDefault();
        const sightingData = {
            habitat_id: habitat.id,
            animal_id: animals.find(animal => animal.name== animalName).id,
            seen: Date()
        }

        fetch('http://localhost:9292/sightings/', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sightingData),
        })
            .then((r) => r.json())
            .then((newSighting) => console.log(newSighting));
        }
        

return (
    <Form onSubmit={(e)=>{handleSubmitSight(e)}} >
            <Form.Field>
                <Label for="Seen">Animal Seen:</Label>
                <Input placeholder='Animal' onChange={(e)=>setAnimalName(e.target.value)} value={animalName}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
)
}

export default SightForm;