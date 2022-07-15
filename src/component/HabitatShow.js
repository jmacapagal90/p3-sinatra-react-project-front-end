import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import AnimalCard from "./AnimalCard";
import SightForm from "./SightForm";

function HabitatShow({ animals,setRefresh,onExtinction}){
    const [ refreshHabitat, setRefreshHabitat ] = useState(false)
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
  }, [refreshHabitat])

  function onRefreshHabitat(){
    setRefreshHabitat(!refreshHabitat)
  }

  const renderAnimalCard = habitatData.sightings && habitatData.sightings.map((animal)=> {
    return (
        <AnimalCard onExtinction={onExtinction} setRefreshHabitat={onRefreshHabitat} setRefresh={setRefresh} habitat={habitatData} key={animal.animal} animal={animal.animal}/>
        )
     })

    return (
        <>
        <SightForm habitat = {habitatData} animals = {animals} setRefresh={setRefresh}/>
        <div>
            <h1>{habitatData.name}</h1>
            {renderAnimalCard}
        </div>
        </>
    )
}

export default HabitatShow;