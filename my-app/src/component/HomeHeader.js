import React from "react";
import {Container} from 'semantic-ui-react';

function HomeHeader(){
    return (
        <Container class="ui sizer vertical segment">
            <h1 class="ui huge header ">Welcome to the Zoo!</h1>
            <h2 class="ui small header">Select a Habitat and See What Animals You Can Spot!</h2>        
        </Container>
    )
}

export default HomeHeader;