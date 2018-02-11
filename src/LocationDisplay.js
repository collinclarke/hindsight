import React, { Component } from 'react';
import './LocationDisplay.css';

class LocationDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toTimeString(),
    }
  }

  componentDidMount() {
    setInterval(() => {
      const time = new Date().toTimeString();
      this.setState({ time })
    }, 1000)
  }

  render() {
    const { time } = this.state;
    if (this.props.location) {
      const { ip, city, region_name, country_name } = this.props.location;
      return (
        <div className="LocationDisplay">
          <div className="LocationDisplay-ip">
            { ip }
          </div>
          <div className="LocationDisplay-location">
            { city + ", " + region_name + ", " + country_name }
          </div>
          <div className="LocationDisplay-date">
            { time }
          </div>
        </div>
      )
    } else {
      return (
        <div className="LocationDisplay">
          <div className="LocationDisplay-loading">
            Finding You
          </div>
        </div>
      )
    }
  }
}


export default LocationDisplay;
