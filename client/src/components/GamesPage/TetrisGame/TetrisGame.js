import React, { Component } from 'react';
import './Tetris.css';

const Tetris = require('react-tetris');

class TetrisGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      points: 0
    }
  }


  render(){
    console.log(this.state.points);
    return(
      <Tetris>
        {({
          HeldPiece,
          Gameboard,
          PieceQueue,
          points,
          linesCleared
        }) => {
          // Render it however you'd like
          return (
            <div>
              <HeldPiece />
              <div>
                <p>Points: {points}</p>
                <p>Lines Cleared: {linesCleared}</p>
              </div>
              <Gameboard />
              <PieceQueue />
            </div>
          )
        }}
      </Tetris>
    );
  }
}


export default TetrisGame;