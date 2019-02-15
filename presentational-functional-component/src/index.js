import React from "react";
import ReactDOM from "react-dom";

const todos = [
  { name: "Learn React", status: true },
  { name: "Learn Express", status: true },
  { name: "Learn Node", status: true },
  { name: "Learn Ruby", status: true }
];

const DisplayList = ({ list }) => (
  <div>
    {list.map(todo => (
      <div key={todo.name}>
        <h3>{todo.name}</h3>
        <p>{todo.status.toString()}</p>
      </div>
    ))}
  </div>
);

ReactDOM.render(<DisplayList list={todos} />, document.getElementById("root"));
