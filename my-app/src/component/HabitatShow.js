import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import AnimalCard from "./AnimalCard";
import SightForm from "./SightForm";

function HabitatShow({habitats, animals}){
    const [habitatData,setHabitatData] = useState([])
    const { id }  = useParams()


  useEffect(() => {
    fetch(`http://localhost:9292/habitats/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }}
    )
    .then(response => response.json())
    .then(habitat => setHabitatData(habitat))
    .catch((error) => {
    console.error('Error:', error);
    });
  }, [])

  const renderAnimalCard = habitatData.sightings && habitatData.sightings.map((animal)=> {
    return (
        <AnimalCard habitat={habitatData} key={animal.animal} animal={animal.animal}/>
        )
     })

    return (
        <>
        <SightForm habitat = {habitatData} animals = {animals}/>
        <div>
            <h1>{habitatData.name}</h1>
            {renderAnimalCard}
        </div>
        </>
    )
}

export default HabitatShow;