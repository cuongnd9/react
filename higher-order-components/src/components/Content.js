import React from "react";

function Content(props) {
  return (
    <div>
      Mouse click is {props.mouse.x} : {props.mouse.y}
    </div>
  );
}

export default Content;
