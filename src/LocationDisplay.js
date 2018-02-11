import React, { Component } from 'react';
import './LocationDisplay.css';
import { buildWeight } from './util/variableType';

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
            { buildWeight(ip, 2) }
          </div>
          <div className="LocationDisplay-location">
            { buildWeight(city + ", " + region_name + ", " + country_name, 2) }
          </div>
          <div className="LocationDisplay-date">
            { buildWeight(time, 2) }
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
