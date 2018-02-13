import React, { Component } from 'react';
import { buildWeight } from './util/variableType';
import debounce from 'lodash.debounce';
import './Submit.css';

class Submit extends Component {

  constructor() {
    super();
    this.state = {
      text: "",
      display: []
    }
    this.updateDisplay = debounce(this.updateDisplay, 5);
    this.buttonText = buildWeight("Send", 4);
  }

  onChange = (e) => {
    this.setState({text: e.target.value})
    e.persist();
    this.updateDisplay(e);
  }

  updateDisplay(e) {
    const display = buildWeight(e.target.value, 3);
    this.setState({display});
  }

  submitText = (e) => {
    e.preventDefault();
    if (this.state.text) alert("thanks, your text has been submitted");
    // add text to database
  }

  render() {
    return (
      <section className="Submit">
        <div className="Submit-display">
          {this.state.display}
        </div>
        <form className="Submit" onSubmit={this.submitText}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.onChange}
            className="Submit-textarea"
            placeholder="Type here"/>
            <span><button className="Submit-button"
              type="button"
              onClick={this.submitText}>{ this.buttonText }</button></span>
        </form>


      </section>
    )
  }
}

export default Submit;
