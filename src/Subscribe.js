import React, { Component } from 'react';
import { buildWeight } from './util/variableType';
import debounce from 'lodash.debounce';
import './Subscribe.css';

class Subscribe extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      display: []
    }
    this.buttonText = buildWeight("Subscribe", 2);
  }

  onChange = (e) => {
    this.setState({email: e.target.value})
    e.persist();
  }

  submitEmail = (e) => {
    e.preventDefault();
    if (this.state.email) alert("thanks " + this.state.email);
    // parse string for email
    // add to state
    // add username either way
    // save email to db
    // save email/user to window
  }

  render() {
    return (
      <form className="Subscribe" onSubmit={this.submitEmail}>

        <input
          type="text"
          value={this.state.email}
          onChange={this.onChange}
          className="Subscribe-textarea"
          placeholder="you@email.me"/>
        <button className="Subscribe-button"
          type="button"
          onClick={this.submitEmail}>{this.buttonText}</button>
      </form>
    )
  }
}

export default Subscribe;
