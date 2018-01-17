import React, { Component } from 'react';
import './App.css';
import Upload from './Upload';
import LocationDisplay from './LocationDisplay';

class App extends Component {

  constructor() {
    super();
    this.state = {
      location: null,
      error: null
    }
  }

  componentDidMount() {
    fetch("https://freegeoip.net/json/")
    .then( res => res.json() )
    .then(
      (result) => {
        this.setState({
          location: result
        }, () => console.log(this.state));
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
    const { location } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">Hindsight.world is an ongoing project, collecting significant images of what matters now from users around the world. Periodically this collection will be consolidated into a publication.</p>
        </header>
        <Upload location={location}/>
        <LocationDisplay location={location}/>
      </div>
    );
  }

}

export default App;
