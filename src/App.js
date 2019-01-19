import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>möbî</h1>
        <Navbar />
        <Game />
      </div>
    );
  }
}

export default App;
