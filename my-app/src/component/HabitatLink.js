import React from "react";
import { NavLink,Route } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

function HabitatLink({id,name,handleHabitatID}){
    //habitat.forEach((habitat) => {console.log(habitat.id)});
    function handleClick(){
        handleHabitatID(id)
    }
    return (
        <>
            <MenuItem as="a">
                <NavLink to={`/habitat/${id}`} onClick={()=>handleClick()}>
                    {name}
                </NavLink>
            </MenuItem>
        </>
    )
}

export default HabitatLink;