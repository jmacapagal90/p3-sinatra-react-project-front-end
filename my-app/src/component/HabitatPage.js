import React from "react";
import HabitatShow from "./HabitatShow";
import { Route, useRouteMatch } from 'react-router-dom'

function HabitatPage({ habitats }){
    const match = useRouteMatch()
    console.log(match)
    return (
        <Route path={`${match.url}/:id`}>
            {habitats.map((habitat)=>{
            return (
                <HabitatShow habitat={habitat}/>
            )})}
        </Route>
)}

export default HabitatPage;