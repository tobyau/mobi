import React from 'react'
import PresentationalCard from './PresentationalCard';
import { Grid } from 'semantic-ui-react';
import './GamePage.css';

/*
Game page 
Uses the presentational card component to display different game cards
Cards include a picture, video demo, title, description and a "Play the game" button
*/

const items = [
  {
    picture: '/GamePictures/Tetris.png',
    id: 'QQ5U-rN7Veg',
    header: 'Tetris',
    description: 'It is tetris cmon',
    name: 'Tetris'
  },
  {
    picture:'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcegOkVb21TDTzcq5gnihG6VlWWI7EHdms767cI7A8IT8qu.OLHcv4D7OAXwA55k9jQhIMB8CH1dqlQvZW1PVrtDvW0zgq9kfklZn6u71hgbWnfpRHFC6rThtIMrMxlGWD4aAH117btbnh.uD7pLxsezIBr_.FaGbIV5.EBWwUVOU-&h=1080&w=1920&format=jpg',
    id: 'k0GiO554wnk',
    header: 'Naruto Ninja Storm 4',
    description: 'NARUTOOOOOO',
    name: 'Naruto'
  },
  {
    picture:'https://blznav.akamaized.net/img/games/cards/card-overwatch-7eff92e1257149aa.jpg',
    id: 'FqnKB22pOC0',
    header: 'Overwatch',
    description: 'Overwatch is a team-based multiplayer first-person shooter video game developed and published by Blizzard Entertainment',
    name: 'Overwatch'
  },
  {
    picture:'https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg',
    id: 'zw47_q9wbBE',
    header: 'Breath of the Wild',
    description: 'The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo',
    name: 'Zelda'
  }
]

var games = items.map((element, index) => (<div key={index}> <PresentationalCard object={element}/> </div>)
);

// use the map array function later 
// this is used as a demo 
const GamePage = () => {
  return(
    <div className='games-container'>
      <Grid centered relaxed='very'>
          {games}
      </Grid>
    </div>
  );
};

export default GamePage;