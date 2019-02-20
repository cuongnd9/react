import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      let { count } = this.state;
      this.setState({
        count: ++count
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div>{this.props.render(this.state.count)}</div>;
  }
}
