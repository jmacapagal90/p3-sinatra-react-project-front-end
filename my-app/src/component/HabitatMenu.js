import React from "react";
import { NavLink,Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Menu, MenuItem } from "semantic-ui-react";
import HabitatLink from "./HabitatLink";

function HabitatMenu({habitat,handleHabitatID}){

    return (
        <Menu vertical compact size="massive">
            {habitat && 
            habitat.map((habitat) => {
                return (
                    <HabitatLink key={habitat.id} id={habitat.id} name={habitat.name} handleHabitatID={handleHabitatID}/>
                )
            })}
        </Menu>
    )
}
export default HabitatMenu;