import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// presentational component
const PresentationalCard = (props) => {
    var gameNames = ['Tetris', 'Mattew'];
    var gameName;

    for(var i = 0; i < gameNames.length; i++){
        if(gameNames[i] === props.object.name){
            gameName = props.object.name;
        }
    }

    return(
        <div>
            <Card>
                <Image src={props.object.src} />
                <Card.Content>
                    <Card.Header>{gameName}</Card.Header>
                    <Card.Description>{props.object.description}</Card.Description>
                </Card.Content>
                <Button type="button" as={Link} to={`/Home/${gameName}`}>Play Game</Button>
            </Card>
        </div>
    );
}

export default PresentationalCard;