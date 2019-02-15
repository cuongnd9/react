import React from "react";

export default function({ data, render }) {
  return <div>{data.map(render)}</div>;
}
