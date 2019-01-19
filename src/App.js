import React, { Component } from 'react';
import RoutePages from './components/RoutePages';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>möbî</h1>
          <RoutePages />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
