import React from "react";
import { Card, Container, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import AnimalCardTwo from './AnimalCardTwo';

function Animals(){
    const [ animal, setAnimal ] = useState([]);
    const [ animalName, setAnimalName ] = useState("");
    const [ animalImage, setAnimalImage ] = useState("");
    const [ sciName, setSciName ] = useState("")
    const newAnimalObj = {
        name: animalName,
        sighted: false,
        image: animalImage,
        extinct: false,
        scientific_name: sciName
    }
    

    useEffect(() => {
        fetch('https://fast-castle-86440.herokuapp.com/animals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }}
        )
        .then(response => response.json())
        .then(animal_data => setAnimal(animal_data))
        .catch((error) => {
        console.error('Error:', error);
        });
      }, [])

      function submitNewAnimal(e) {
        e.preventDefault();
        alert("Nice spot! Thanks for adding a new animal!")
        console.log(newAnimalObj)
        fetch("https://fast-castle-86440.herokuapp.com/animals", {
           method: "POST",
           headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify(newAnimalObj),
        })
        window.location.reload()
     }

     



    return (
        <Container textAlign="center">
            <Form onSubmit={(e)=>{submitNewAnimal(e)}}>
            <Form.Field>
                <Label for="animalform">Animal Name:</Label>
                <Input placeholder='Animal Name' onChange={(e)=>setAnimalName(e.target.value)} value={animalName}/>
            </Form.Field>
            <Form.Field>
                <Label for="animalform">Scientific Name:</Label>
                <Input placeholder='Scientific Name' onChange={(e)=>setSciName(e.target.value)} value={sciName}/>
            </Form.Field>
            <Form.Field>
                <Label for="animalform">Image: </Label>
                <Input placeholder='Image URL' onChange={(e)=>setAnimalImage(e.target.value)} value={animalImage}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
            </Form>
        <Container >
        <br></br>
        <Card.Group id="animal_card_two">
            {animal && 
            animal.map((animal) => {
                return (
                    <AnimalCardTwo key={animal.id} animal={animal}/>
                )
            })}
        </Card.Group>
        </Container>
        </Container>
    )
}
export default Animals;