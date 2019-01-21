import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

// presentational component

const PresentationalCard = (props) => {
    return(
        <div>
            <Card>
                <Image src={props.object.src} />
                <Card.Content>
                    <Card.Header>{props.object.name}</Card.Header>
                    <Card.Description>{props.object.description}</Card.Description>
                </Card.Content>
            </Card>
        </div>
    );
}

export default PresentationalCard;