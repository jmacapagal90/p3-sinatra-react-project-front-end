import React from "react";
import { NavLink,Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Menu, MenuItem } from "semantic-ui-react";
import HabitatDetail from "./HabitatDetail";

function HabitatMenu(){
    const [ habitat, setHabitats ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9292/habitats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }}
        )
        .then(response => response.json())
        .then(habitat_data => setHabitats(habitat_data))
        .catch((error) => {
        console.error('Error:', error);
        });
      }, [])

    //   function handleClick(e){
    //     console.log(e)
    //   }
    return (
        <Menu vertical compact size="massive">
            {habitat && 
            habitat.map((habitat) => {
                return (
                        <MenuItem as="a">
                            <NavLink key={habitat.id} to={`/habitat/${habitat.id}`}>
                                {habitat.name}
                            </NavLink>
                        </MenuItem>
                )
            })}
        </Menu>
    )
}
export default HabitatMenu;