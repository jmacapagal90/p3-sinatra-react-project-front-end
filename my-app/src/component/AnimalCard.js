import React from "react";
import { Card } from "semantic-ui-react";

function AnimalCard ({ animal, habitat,setRefresh,setRefreshHabitat }){
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
                    setRefresh()
                    setRefreshHabitat()
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
            
    }

    function handleExtinction() {
        fetch(`http://localhost:9292/animal/${animal.id}`, {
          method: "Delete",
        })
          .then((response) => response.json())
          .then((data) => setRefreshHabitat(data));
      }

    return (
        <Card>
            <h4>{animal.name}</h4>
            <img src={animal.image} />
            <p>{animal.scientific_name}</p>
            <p>Have You Seen This Animal?</p>
            <p>{animal.sighted ? "Yes" : "No" }</p>
            <button onClick= {handleSighting}>Add Sighting</button>
            <p>Is This Animal Extinct?</p>
            <p>{animal.extinct ? "They gone" : "Still around"}</p>
            <button onClick= {handleExtinction}>Extinction Button</button>
        </Card>

    )
}

// t.boolean :sighted
// t.string :image
// t.boolean :extinct
// t.string :scientific_name

export default AnimalCard;