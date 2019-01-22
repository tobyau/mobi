import React from 'react';
import { Card, Embed, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './GamePage.css'

// presentational component
const PresentationalCard = (props) => {
    var gameNames = ['Tetris', 'Naruto'];
    var gameName;

    for(var i = 0; i < gameNames.length; i++){
        if(gameNames[i] === props.object.name){
            gameName = props.object.name;
        }
    }

    return(
        <div>
            <Grid.Column>
                <Card className='game-card'>
                    <Embed className='video' id={props.object.id} placeholder={props.object.picture} source='youtube' />
                    <Card.Content>
                        <Card.Header>{gameName}</Card.Header>
                        <Card.Description>{props.object.description}</Card.Description>
                    </Card.Content>
                    <Button type="button" as={Link} to={`/Home/${gameName}`}>Play Game</Button>
                </Card>
            </Grid.Column>
        </div>
    );
}

export default PresentationalCard;