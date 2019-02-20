import React from "react";

import NumberContext from "../contexts/NumberContext";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5
    };
  }

  increaseNumber() {
    let { number } = this.state;
    this.setState({
      number: ++number
    });
  }

  render() {
    return (
      <NumberContext.Provider
        value={{
          number: this.state.number,
          increase: this.increaseNumber.bind(this)
        }}
      >
        {this.props.children}
      </NumberContext.Provider>
    );
  }
}
