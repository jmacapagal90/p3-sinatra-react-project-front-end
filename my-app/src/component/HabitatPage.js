import React from "react";
import AnimalCard from "./AnimalCard";

function HabitatPage({habitat,habitatID}){

    return (
        <>
        <h1>{habitat[habitatID].name}</h1>
        <h1>Animals in Habitat</h1>
        {habitat[habitatID].sightings.map(animal => {
            return (
                <AnimalCard animal={animal.animal}/>
            )})
        }
        </>
    )
}

export default HabitatPage;