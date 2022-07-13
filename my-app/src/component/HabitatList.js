import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { useRouteMatch,Route } from 'react-router-dom'
import HabitatShow from "./HabitatShow";

function HabitatList({habitats}){
    const { path, url } = useRouteMatch()
    console.log(url)
    console.log(path)

    const renderHabitats = habitats.map((habitat) => (
        <li key={habitat.id}>
          <Link to={`${url}/${habitat.id}`}>{habitat.name}</Link>
        </li>
      ));

    return (
        <ul>{renderHabitats}</ul>
    )
}
export default HabitatList;