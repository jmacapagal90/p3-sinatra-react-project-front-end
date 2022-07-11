import React from "react";
import { Header } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function Habitats(){
    useEffect(() => {
        fetch('http://localhost:9292/habitats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }}
        )
        .then(response => response.json())
        .then(habitats => console.log(habitats))
        .catch((error) => {
        console.error('Error:', error);
        });
      }, [])

    return (
     <Header>Habitats</Header>
    )
}

export default Habitats;