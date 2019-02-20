import React, { Component } from "react";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1000000 };
  }

  handleClick() {
    this.setState(state => ({ number: state.number - 1 }));
    this.setState(state => ({ number: state.number - 1 }));
    this.setState(state => ({ number: state.number - 1 }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleClick.bind(this)}>decrease</button>
      </div>
    );
  }
}

export default Number;
