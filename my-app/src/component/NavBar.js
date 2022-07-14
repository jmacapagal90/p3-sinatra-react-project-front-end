import React from "react";
import { Header, Button, Icon }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar(){
 
    return (
        <Header class="navbar" >
            <Button icon class="ui button">
                <NavLink exact to="/">
                        <span></span>
                        <Icon name='home' />
                </NavLink>
            </Button> 
            <Button icon>
                <NavLink exact to="/animals">
                    <span></span>
                    <Icon name='paw' />
                </NavLink>
            </Button>
            <Button icon>
                <NavLink exact to="/habitats">
                    <span></span>
                    <Icon name='world' />
                </NavLink>
            </Button>   
        </Header>
    )
}

export default NavBar;