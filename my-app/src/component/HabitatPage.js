import React from "react";

function HabitatPage({habitat,habitatID}){
    habitat[habitatID].sightings.forEach(animal => {console.log(animal)});
    return (
        <>
        <h1>{habitat[habitatID].name}</h1>
        {/* <h2>{habitat[habitatID].sightings}</h2> */}
        </>
    )
}

export default HabitatPage;