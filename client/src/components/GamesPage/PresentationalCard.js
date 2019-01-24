import React from 'react';
import { Card, Embed, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './GamePage.css'

/*
Presentational component
*/
const PresentationalCard = (props) => {
    return(
        <div>
            <Grid.Column>
                <Card className='game-card'>
                    <Embed className='video' id={props.object.id} placeholder={props.object.picture} source='youtube' />
                    <Card.Content>
                        <Card.Header>{props.object.header}</Card.Header>
                        <Card.Description>{props.object.description}</Card.Description>
                    </Card.Content>
                    <Button type="button" as={Link} to={`/Home/${props.object.name}`}>Play Game</Button>
                </Card>
            </Grid.Column>
        </div>
    );
}

export default PresentationalCard;