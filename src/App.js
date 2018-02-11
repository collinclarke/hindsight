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
    .then( res => res.json(), (error) => this.setState({error}) )
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
          <p className="App-title">Hindsight.world is an ongoing project to gather and document mass thought and aesthetics, in particular through passive collection and web scraping. This portal is dedicated to accepting images from users around the world of what is significant now.</p>
        </header>
        <Upload location={location}/>
        <LocationDisplay location={location}/>
      </div>
    );
  }

}

export default App;
