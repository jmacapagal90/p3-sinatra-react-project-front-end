import React from "react";
import { Card } from "semantic-ui-react";

function AnimalCardTwo ({ animal,onExtinction }){
    console.log(animal)

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    const names = animal.sightings.map((habitat) => habitat.habitat.name)
    const uniqueNames = names.filter(onlyUnique)
    console.log(uniqueNames)

    const renderHabitats = uniqueNames.map((name)=> {
        return (
            <p>{name}</p>
            )
         })

    function handleExtinction() {
        fetch(`http://localhost:9292/animal/${animal.id}`, {
          method: "Delete",
        })
          .then((response) => response.json())
          .then((data) => onExtinction());
      }



    return (
        <Card>
            <h4>{animal.name}</h4>
            <img src={animal.image} />
            <p>{animal.scientific_name}</p>
            <p>Have You Seen This Animal?</p>
            <p>{animal.sighted ? "Yes" : "No" }</p>
            {renderHabitats}
            <p>Is This Animal Extinct?</p>
            <p>{animal.extinct ? "They gone" : "Still around"}</p>
            <button onClick= {handleExtinction}>Extinction Button</button>
        </Card>
    )
}

export default AnimalCardTwo;