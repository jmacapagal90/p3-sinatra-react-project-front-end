import React from "react";
import { useParams,useRouteMatch } from "react-router-dom";
import AnimalCard from "./AnimalCard";

function HabitatShow({habitats}){
    const { params } = useParams()
    const { url, path } = useRouteMatch()
    console.log("params:", params)
    console.log("url:", url)
    console.log("path:", path)

    return (
        <div>
            <AnimalCard />
        </div>
    )
}

export default HabitatShow;