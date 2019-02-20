import React, { useContext } from "react";
import { NumberContext } from "../contexts/NumberContext";

export default function() {
  const { number, increase } = useContext(NumberContext);

  return (
    <div>
      <h3>{number}</h3>
      <button onClick={increase}>increase</button>
    </div>
  );
}
