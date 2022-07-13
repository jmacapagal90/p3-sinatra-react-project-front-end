import React from "react";
import { Link } from "react-router-dom";

function HabitatList({habitats}){

    const renderHabitats = habitats.map((habitat) => (
        <li key={habitat.id}>
          <Link to={`/habitats/${habitat.id}`}>{habitat.name}</Link>
        </li>
      ));

    return (
        <ul>{renderHabitats}</ul>
    )
}
export default HabitatList;