import React, { Component } from "react";
import ReactDOM from "react-dom";

const { Provider, Consumer } = React.createContext();

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "tomato",
      text: "click me!"
    };
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          showAlert: () => alert("successed!")
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

function App() {
  return (
    <Container>
      <Button />
    </Container>
  );
}

function Button() {
  return (
    <Consumer>
      {context => (
        <button
          style={{ color: context.state.color }}
          onClick={context.showAlert}
        >
          {context.state.text}
        </button>
      )}
    </Consumer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
