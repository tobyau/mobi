import React from 'react'
import Game from './Game';

const items = [
  {
    src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    name: 'Mattew',
    date: 'Joined in 2015',
    description: 'Matthew is a musician living in Nashville.',
    friends: 22
  },
  {
    src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    name: 'Mattew',
    date: 'Joined in 2015',
    description: 'Matthew is a musician living in Nashville.',
    friends: 22
  }
]

var games = items.map((element, index) => (<div key={index}> <Game object={element}/> </div>)
);

// use the map array function later 
// this is used as a demo 
const GamePage = () => {
  return(
    <div>
      {games}
    </div>
  );
};

export default GamePage;