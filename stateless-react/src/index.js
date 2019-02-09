import React from "react";
import ReactDOM from "react-dom";

import Cover from "./components/Cover";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Cover
        alt="react"
        src="https://cdn-images-1.medium.com/max/2000/1*YG3-T77xGBfKDn5SfE6P8w.jpeg"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
