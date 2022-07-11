import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Menu } from "semantic-ui-react"

function Habitats(){
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
                    <Menu.Item  activeStyle={{color: "orange"}} as='a'>
                        <Link key={habitat.id} to={`/habitat/${habitat.id}`}>
                            {habitat.name}
                        </Link>
                    </Menu.Item>
                )
            })}
        </Menu>
    )
}
export default Habitats;