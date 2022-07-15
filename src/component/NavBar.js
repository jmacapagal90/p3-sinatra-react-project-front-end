import React from "react";
import { Menu,Header, Button,Icon, MenuItem }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar(){
 
    return (

        <Header class='navbar'>
            <Menu textAlign="center">
            <Button icon class='ui button'>
               <NavLink exact to='/'>
                  <span></span>
                  <Icon name='home' />
                  <br></br>
                  &nbsp; Home &nbsp; &nbsp;
               </NavLink>
            </Button>
            <Button icon>
               <NavLink exact to='/animals'>
                  <span></span>
                  <Icon name='paw' />
                  <br></br>
                  Animals
               </NavLink>
            </Button>
            <Button icon>
               <NavLink exact to='/habitats'>
                  <span></span>
                  <Icon name='world' />
                  <br></br>
                  Habitats
               </NavLink>
            </Button>
            </Menu>
      </Header>

    )
}

export default NavBar;