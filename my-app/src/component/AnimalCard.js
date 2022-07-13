import React from "react";
import { Card } from "semantic-ui-react";

function AnimalCard ({ animal }){

    function handleSighting() {
        console.log("what we'll want to do is create a Sighting with the current timestamp, the animal_id of the current animal and the habitat_id of the current habitat")
        console.log("also, turn Sighted of the animal to true")
    }

    function handleExtinction() {
        fetch(`http://localhost:9292//animal/${animal.id}`, {
          method: "Delete",
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }

    return (
        <Card>
            <h4>{animal.name}</h4>
            <img src={animal.image} />
            <p>{animal.scientific_name}</p>
            <p>Have You Seen This Animal?</p>
            <p>{animal.sighting? "Yes" : "No" }</p>
            <button onClick= {handleSighting}>Add Sighting</button>
            <p>Is This Animal Extinct?</p>
            <p>{animal.extinct? "They gone" : "Still around"}</p>
            <button onClick= {handleExtinction}>Extinction Button</button>
        </Card>
    )
}

// t.boolean :sighted
// t.string :image
// t.boolean :extinct
// t.string :scientific_name

export default AnimalCard;