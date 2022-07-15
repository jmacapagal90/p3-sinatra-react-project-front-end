import React from "react";
import { Header, Container,Card,Image,Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';

function Home({ animals }){
    const homeAnimal = animals[animals.length -1]


    if(!window.location.hash.includes("#reloaded")) {
        window.location.href += "#reloaded";
        window.location.reload()
    }
    
    return (
        <Container textAlign="center">
        <Header class="ui sizer vertical segment">
            <h1 class="ui huge header ">Welcome to the Zoo!</h1>
            <h3 class="ui small">Browse by Habitat or Animals</h3>   
        </Header>
            <Menu  fluid widths={2} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/animals">Animals</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/habitats">Habitats</Link>
                    </h2>
                </Menu.Item>
            </Menu>
        {homeAnimal ? 
        <Card.Group itemsPerRow={1}>
        <Card>
            <Header class="ui huge header">New Addition:</Header>
            <Card.Content>{homeAnimal.name.toUpperCase()}</Card.Content>
            <Image src={homeAnimal.image} alt={homeAnimal.name}/>
            <Card.Content>Scientific Name: {homeAnimal.scientific_name}</Card.Content>
        </Card>
        </Card.Group>: null}
        </Container>
    )
}

export default Home;