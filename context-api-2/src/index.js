import React from "react";
import ReactDOM from "react-dom";

import Grandmother from "./Grandmother";

function App() {
  return (
    <div className="App">
      <Grandmother />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
