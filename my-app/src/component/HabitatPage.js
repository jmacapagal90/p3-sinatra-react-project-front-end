import React from "react";
import {useParams} from "react-router-dom"

function HabitatPage({habitat}){
    const params = useParams()
    console.log(habitat)

    return (
        <>
            <h1>test</h1>
        </>
    )
}

export default HabitatPage;