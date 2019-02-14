import React from "react";
import ReactDOM from "react-dom";

import Content from "./components/Content";
import withMouse from "./components/withMouse";
import "./styles.css";

const ComponentWithMouse = withMouse(Content);

function App() {
  return (
    <div className="App">
      <ComponentWithMouse />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
