import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

function HabitatList({habitats}){

    const renderHabitats = habitats.map((habitat) => (
        <li key={habitat.id}>
          <Link to={`/habitat/${habitat.id}`}>{habitat.name}</Link>
        </li>
      ));

    return (
        <ul>{renderHabitats}</ul>
    )
}
export default HabitatList;