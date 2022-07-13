import React from "react";
import { Header, Container } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import AnimalCardTwo from "./AnimalCardTwo";

function Home( {animal}){
    return (
        <Container>
        <Header textAlign="center" class="ui sizer vertical segment">
            <Header class="ui huge header ">Welcome to the Zoo!</Header>
            <Header class="ui small">Select a Habitat to View All The Animals</Header>      
            <Header class="ui small">Or View the Animals and see their Habitats</Header>     
        </Header>
        <div  class="ui two column divided grid">
            <div textAlign="center" class="column">
                <h1 class="medium">
                <Link to="/animals">Animals</Link>
                </h1>
            </div>
            <div textAlign="center" class="column">
                <h1 class="medium">
                <Link to="/habitats">Habitats</Link>
                </h1>
            </div>
        </div>
        <AnimalCardTwo 
        animal={animal}
        />
        </Container>
    )
}

export default Home;