import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import NumberProvider from "./components/NumberProvider";
import Counter from "./components/Counter";
import Countdown from "./components/Countdown";

import NumberContext from "./contexts/NumberContext";

const data = ["Cuong", "Duy", "Nguyen"];

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <Counter
          render={value => (
            <div style={{ color: "green", fontSize: "30px" }}>{value}</div>
          )}
        />
        <Countdown
          render={time => <h1 style={{ color: "purple" }}>{time}</h1>}
        />
        <NumberContext.Consumer>
          {context => (
            <div>
              <h3>{context.number}</h3>
              <button onClick={context.increase}>increase</button>
            </div>
          )}
        </NumberContext.Consumer>
      </div>
    </NumberProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
