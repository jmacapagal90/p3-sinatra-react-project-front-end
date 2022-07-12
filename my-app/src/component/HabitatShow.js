import React from "react";
import HabitatPage from "./HabitatPage";
import { Route, useRouteMatch } from 'react-router-dom'

function HabitatShow({ habitats }){
    const match = useRouteMatch()
    console.log(match)
    return (
        <Route path={`${match.url}/:id`}>
            {habitats.map((habitat)=>{
            return (
                <HabitatPage habitat={habitat}/>
            )})}
        </Route>
)}

export default HabitatShow;