import React from "react";
import HabitatList from "./HabitatList"
import HabitatShow from "./HabitatShow";
import { Route, useRouteMatch } from 'react-router-dom'

function HabitatPage({ habitats }){
    const { path } = useRouteMatch()
    console.log(path)
    return (
        <div>
            <HabitatList habitats={habitats} /> 
        </div>
)}

export default HabitatPage;