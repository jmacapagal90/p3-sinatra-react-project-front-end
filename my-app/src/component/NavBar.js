import React from "react";
import { NavLink,Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Menu, MenuItem } from "semantic-ui-react";

function NavBar({habitats}){

    return (
        <Menu vertical compact size="massive">
            {habitats && 
            habitats.map((habitat) => {
                return (
                    <MenuItem as="a">
                        <NavLink to={`/habitat/${habitat.id}`} >
                            {habitat.name}
                        </NavLink>
                    </MenuItem>
                )
            })}
        </Menu>
    )
}
export default NavBar;