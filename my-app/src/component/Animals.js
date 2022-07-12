import React from "react";
import { Card, Container } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';

function Animals(){
    const [ animal, setAnimal ] = useState([]);

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
      }, [])



    return (
        <Container>
        <Card.Group itemsPerRow={4}>
            {animal && 
            animal.map((animal) => {
                return (
                    <AnimalCard key={animal.id} animal={animal}/>
                )
            })}
        </Card.Group>
        </Container>
    )
}
export default Animals;