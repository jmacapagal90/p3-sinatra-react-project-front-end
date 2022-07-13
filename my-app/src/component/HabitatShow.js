import React from "react";
import { useParams,useRouteMatch } from "react-router-dom";

function HabitatShow({habitats}){
    const { params } = useParams()
    const { url, path } = useRouteMatch()
    console.log("params:", params)
    console.log("url:", url)
    console.log("path:", path)

    return (
        <div>
            <h3>test</h3>
        </div>
    )
}

export default HabitatShow;