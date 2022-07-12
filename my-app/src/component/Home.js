import React from "react";
import {Container} from 'semantic-ui-react';
import HabitatMenu from './HabitatMenu';
import Animals from './Animals'

function Home(){
    return (
        <Container class="ui sizer vertical segment">
            <h1 class="ui huge header ">Welcome to the Zoo!</h1>
            <h2 class="ui small header">Select a Habitat and See What Animals You Can Spot!</h2>        
                <HabitatMenu />
        </Container>
    )
}

export default Home;