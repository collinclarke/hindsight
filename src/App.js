import React, { Component } from 'react';
import logo from './icon.svg';
import './App.css';
import Upload from './Upload';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hindsight</h1>
        </header>
        <div className="App-intro">
          <Upload />
        </div>

      </div>
    );
  }

}

export default App;
