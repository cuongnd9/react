import React from "react";

const withMouse = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { x: 1, y: 2 };
    }

    handleMouseEnter = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    };

    render() {
      return (
        <div onMouseEnter={this.handleMouseEnter}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
};

export default withMouse;
