import React from "react";
import { useParams,useRouteMatch } from "react-router-dom";

function HabitatShow(){
    const { params } = useParams()
    const { url, path } = useRouteMatch()
    console.log(params)
    console.log("hey")
    return (
        <div>
            <h3>test</h3>
        </div>
    )
}

export default HabitatShow;