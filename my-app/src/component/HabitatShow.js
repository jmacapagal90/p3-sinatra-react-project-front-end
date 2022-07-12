import React from "react";
import { useParams } from "react-router-dom";

function HabitatShow({habitats}){
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h3>{habitats[params].name}</h3>
        </div>
    )
}

export default HabitatShow;