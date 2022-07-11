import React from "react";
import { Card } from "semantic-ui-react";

function AnimalCard ({ name }){

    return (
        <Card>
             <Card.Header>
                {name}
              </Card.Header>
        </Card>
    )
}

export default AnimalCard;