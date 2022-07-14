import React from "react";
import { Card, Container, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import AnimalCardTwo from './AnimalCardTwo';

function Animals(){
    const [ animal, setAnimal ] = useState([]);
    const [ refreshAnimals, setRefreshAnimals ] = useState(false)
    const [ animalName, setAnimalName ] = useState("");
    const [ animalImage, setAnimalImage ] = useState("");
    const newAnimalObj = {
        name: animalName,
        image: animalImage,
        sighted: false,
        extinct: false
    }

    useEffect(() => {
        fetch('http://localhost:9292/animals', {
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
      }, [refreshAnimals])

      function submitNewAnimal(e) {
        e.preventDefault();
        fetch("http://localhost:9292/animals", {
           method: "POST",
           headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify(newAnimalObj),
        })
           .then((r) => r.json())
           .then((animal_data) => setAnimal(...animal_data, newAnimalObj))
           .then(() => {
              setAnimalName("")
              setAnimalImage("")
           })
     }
     function onExtinction(){
        setRefreshAnimals(!refreshAnimals)
     }



    return (
        <Container>
            <Form onSubmit={(e)=>{submitNewAnimal(e)}} >
            <Form.Field>
                <Label for="animalform">Animal Name:</Label>
                <Input placeholder='Animal Name' onChange={(e)=>setAnimalName(e.target.value)} value={animalName}/>
            </Form.Field>
            <Form.Field>
                <Label for="animalform">Image: </Label>
                <Input placeholder='Image' onChange={(e)=>setAnimalImage(e.target.value)} value={animalImage}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        <Card.Group itemsPerRow={4}>
            {animal && 
            animal.map((animal) => {
                return (
                    <AnimalCardTwo onExtinction={onExtinction} key={animal.id} animal={animal}/>
                )
            })}
        </Card.Group>
        </Container>
    )
}
export default Animals;