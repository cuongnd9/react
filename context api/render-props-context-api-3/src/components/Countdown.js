import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 10000000000000
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      let { time } = this.state;
      this.setState({
        time: --time
      });
    }, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return <div>{this.props.render(this.state.time)}</div>;
  }
}

export default Countdown;
