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
            <div className='game'>
              <div className='points'>
                <p>Points: {points}</p>
                <p>Lines Cleared: {linesCleared}</p>
              </div>
              
              <div className='heldPiece'>
                <HeldPiece />
              </div>

              <div className='gameBoard'>
                <Gameboard />
              </div>

              <div className='pieceQueue'>
                <PieceQueue />
              </div>
            </div>
          )
        }}
      </Tetris>
    );
  }
}


export default TetrisGame;