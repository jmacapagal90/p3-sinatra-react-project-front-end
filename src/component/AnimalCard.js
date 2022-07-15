import React from "react";
import { Card,Image,Button,Header,Icon } from "semantic-ui-react";

function AnimalCard ({ animal, habitat}){
    console.log(animal)
    function handleSighting() { 
        const sightingData = {
            animal_id: animal.id,
            habitat_id: habitat.id,
            seen: Date()
        }
            fetch(`http://localhost:9292/animal/${animal.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  sighted: true,
                }),
              })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    console.log("also, turn Sighted of the animal to true")})
            
        fetch(`http://localhost:9292/sightings/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sightingData),

        })
        .then((r) => r.json())
        .then((newSighting) => console.log(newSighting));
        window.location.reload()
            
    }

    function handleExtinction() {
        fetch(`http://localhost:9292/animal/${animal.id}`, {
          method: "Delete",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          window.location.reload()
      }

    return (
        <Card>
                <Card.Content class="header">{animal.name.toUpperCase()}</Card.Content >
                <Card.Content  class="image">
                    <img  src={animal.image} alt={animal.name}/>
                </Card.Content >
                <Card.Content  class="header">{animal.scientific_name}</Card.Content >
                <Card.Content  class="header">Have You Seen This Animal?</Card.Content>
                <Card.Content  class="header">{animal.sighted ? "Yes" : "No" }</Card.Content >
                    <Button onClick= {handleSighting}>Add Sighting</Button>
                <Card.Content  class="header">Is This Animal Extinct?</Card.Content >
                <Card.Content  class="header">{animal.extinct ? "Extinct" : "Not Extinct"}</Card.Content>
                <Button onClick= {handleExtinction} animated>
                <Button.Content visible>Extinct?</Button.Content>
                <Button.Content hidden>
                    Mark Extinct
                    <Icon name='close' />
                </Button.Content>
            </Button>
        </Card>

    )
}


export default AnimalCard;