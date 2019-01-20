import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

// presentational component

const Game = (props) => {
    return(
        <div>
            <Card>
                <Image src={props.object.src} />
                <Card.Content>
                    <Card.Header>{props.object.name}</Card.Header>
                    <Card.Meta>
                    <span className='date'>{props.object.date}</span>
                    </Card.Meta>
                    <Card.Description>{props.object.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                    <Icon name='user' />
                    {props.object.friends} Friends
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}

export default Game;