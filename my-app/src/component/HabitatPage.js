import React from "react";
import HabitatList from "./HabitatList"
import HabitatShow from "./HabitatShow";
import { Route, useRouteMatch } from 'react-router-dom'

function HabitatPage({ habitats }){
    const match = useRouteMatch()
    console.log(match)
    return (
        <div>
        <HabitatList habitats={habitats} />
        <Route path={`habitat/:habitatId`}>
            <HabitatShow habitats={habitats}/>
        </Route>
        </div>
)}

export default HabitatPage;