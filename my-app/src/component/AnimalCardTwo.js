import React from "react";
import { Card,Button } from "semantic-ui-react";

function AnimalCardTwo ({ animal }){

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    const names = animal.sightings.map((habitat) => habitat.habitat.name)
    const uniqueNames = names.filter(onlyUnique)

    const renderHabitats = uniqueNames.map((name)=> {
        return (
            <Card.Content>{name}</Card.Content>
            )
         })

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
            <Card.Content>{animal.name.toUpperCase()}</Card.Content>
            <Card.Content><img src={animal.image} alt={animal.name}/></Card.Content>

            <Card.Content>{animal.scientific_name}</Card.Content>
            <Card.Content>Have You Seen This Animal?</Card.Content>
            <Card.Content>{animal.sighted ? "Yes" : "No" }</Card.Content>
            {renderHabitats} 
            <Card.Content>Is This Animal Extinct?</Card.Content>
            <Card.Content>{animal.extinct ? "Extinct" : "Mark Extinct"}</Card.Content>
            <Button onClick= {handleExtinction}>Extinct</Button>
        </Card>
    )
}

export default AnimalCardTwo;