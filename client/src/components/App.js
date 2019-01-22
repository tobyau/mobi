import React, { Component } from 'react';
import './App.css';
import RoutePages from './RoutePages';
import { BrowserRouter } from 'react-router-dom';

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