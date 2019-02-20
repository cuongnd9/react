import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
