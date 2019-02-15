import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import List from "./components/List";
import Counter from "./components/Counter";

const data = ["Cuong", "Duy", "Nguyen"];

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "lightblue" }}>Render Props</h1>
      <List
        data={data}
        render={item => <div style={{ color: "tomato" }}>{item}</div>}
      />
      <List
        data={data}
        render={item => <div style={{ color: "purple" }}>{item}</div>}
      />
      <List
        data={data}
        render={item => <div style={{ color: "lightgreen" }}>{item}</div>}
      />
      <Counter
        render={value => (
          <div style={{ color: "blue", fontSize: "30px" }}>{value}</div>
        )}
      />
      <Counter
        render={value => (
          <div style={{ color: "green", fontSize: "30px" }}>{value}</div>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
