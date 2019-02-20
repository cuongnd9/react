import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import NumberProvider, { NumberContext } from "./contexts/NumberContext";
import Number from "./components/Number";

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <Number />
      </div>
    </NumberProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
