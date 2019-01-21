import React from 'react'
import PresentationalCard from './PresentationalCard';

//const TetrisPicture = require();
const items = [
  {
    src: window.location.origin + '/GamePictures/Tetris.png',
    name: 'Tetris',
    description: 'It is tetris cmon',
  },
  {
    src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    name: 'Mattew',
    description: 'Matthew is a musician living in Nashville.',
  }
]

var games = items.map((element, index) => (<div key={index}> <PresentationalCard object={element}/> </div>)
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