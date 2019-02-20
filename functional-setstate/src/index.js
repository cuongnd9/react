import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Number from "./Number";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Number />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
