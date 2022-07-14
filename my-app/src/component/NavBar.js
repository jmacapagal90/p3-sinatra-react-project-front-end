import React from "react";
import { Header, Button, Icon }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar(){
 
    return (
        <Header >
            <Button icon >
                <NavLink exact to="/">
                    <Button icon>
                        <Icon name='home' />
                    </Button>
                </NavLink>
            </Button> 
            <Button icon>
                <NavLink exact to="/animals">
                    <Icon name='paw' />
                </NavLink>
            </Button>
            <Button icon>
                <NavLink exact to="/habitats">
                    <Icon name='world' />
                </NavLink>
            </Button>   
        </Header>
    )
}

export default NavBar;