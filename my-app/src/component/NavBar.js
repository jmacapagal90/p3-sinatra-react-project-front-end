import React from "react";
import { Menu, MenuItem,Icon }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar(){
 
    return (
        <Menu fluid widths={3} size='large'>
            <MenuItem as={NavLink} exact to="/" className="button" activeStyle={{color: "green"}}> <Icon name='home' /></MenuItem>
            <MenuItem as={NavLink} exact to="/habitats" className="button" activeStyle={{color: "green"}}><Icon name='world' /></MenuItem>
            <MenuItem as={NavLink} exact to="/animals" className="button" activeStyle={{color: "green"}}><Icon name='paw' /></MenuItem>
        </Menu>
    )
}

export default NavBar;