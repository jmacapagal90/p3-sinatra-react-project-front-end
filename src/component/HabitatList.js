import React from "react";
import { List } from "semantic-ui-react"
import { Link } from "react-router-dom";

function HabitatList({habitats}){

    const renderHabitats = habitats.map((habitat) => (
        <li key={habitat.id}>
          <List.Item as="a">
            <Link to={`/habitats/${habitat.id}`}>{habitat.name}</Link>
          </List.Item>
        </li>
      ));

    return (
        <List>{renderHabitats}</List>
    )
}
export default HabitatList;