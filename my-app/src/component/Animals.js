import React from "react";
import { Header } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function Animals(){
    useEffect(() => {
        fetch('http://localhost:9292/animals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }}
        )
        .then(response => response.json())
        .then(animals => console.log(animals))
        .catch((error) => {
        console.error('Error:', error);
        });
      }, [])

    return (
     <Header>Animals</Header>
    )
}

export default Animals;